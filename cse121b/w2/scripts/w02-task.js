/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Brian Rios Montes Rey';
const currentYear = new Date().getFullYear();
const profilePicture = "images/brian.png";

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const favFoods = ['Breaded-beef steak', 'Ice Cream', 'Mashed Potatoes', 'Rice', 'Dulce de Leche', 'French Fries'];
foodElement.innerHTML = favFoods.join('<br>');

const newFavoriteFood = 'New Favorite Food';
favFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
