// app.js
const searchForm = document.getElementById('location-form');
const searchInput = document.getElementById('search');
const weatherDiv = document.getElementById('weather');
const mockAPIUrl = 'https://run.mocky.io/v3/ce360c53-b144-4bb4-ad44-1abdabb7c1cf';

searchForm.addEventListener('submit', searchWeather);

function searchWeather(e) {
    e.preventDefault();
    fetch(mockAPIUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful response and update UI
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            // Handle error
        });
}

function displayWeather(data) {
    weatherDiv.innerHTML = '';
    const weatherInfo = `
        <h2>${data.city}</h2>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind Speed: ${data.wind_speed} m/s</p>
        <p>Weather: ${data.weather_description}</p>
    `;
    weatherDiv.innerHTML = weatherInfo;
}
