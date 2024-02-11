// Declare Global Variables
const templesElement = document.getElementById("temples");
let templeList = [];

// Function: displayTemples()
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

// Function: getTemples()
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

// Function: reset()
const reset = () => {
    templesElement.innerHTML = "";
}

// Function: sortBy()
const sortBy = (filter) => {
    reset();
    switch (filter) {
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(templeList);
            break;
    }
}

// Event Listener: filterTemples Element change
document.getElementById("filtered").addEventListener("change", (event) => {
    sortBy(event.target.value);
});

// Call getTemples function to fetch and display temple data
getTemples();
