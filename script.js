// API endpoint URL
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

// API key
const apiKey = "486ca9540e11c222a7070b36dcc13a81";

//const searchBar = document.getElementById("search-bar");

//searchBtn.addEventListener ("click",function(){})
//const city = searchBar.value;
const weatherDiv = document.getElementById('weather');
const cityInput = document.getElementById('city-input');
const form = document.getElementById('form');

function getForecast (lat,lon){
const apiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
console.log (apiUrl)
fetch(apiUrl)
.then(response => response.json())
.then(data => {console.log (data) })

}

// Add an event listener to the form to handle user input
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the user's input from the input element
  const city = cityInput.value;
  const apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}`;
  
// Make the API call using fetch()
fetch(apiUrl)
.then(response => response.json())
.then(data => {
// Process the response data as needed
console.log(data);
console.log(data.name);
console.log(data.main.temp);
const lat=data.coord.lat
const lon=data.coord.lon
getForecast(lat,lon)
})
.catch(error => {
console.error(error);
});

});