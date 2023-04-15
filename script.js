// API endpoint URL
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

// API key
const apiKey = "486ca9540e11c222a7070b36dcc13a81";

// City and country code
const city = "London";
const countryCode = "uk";

// Build the API URL with parameters
const apiUrl = `${apiEndpoint}?q=${city},${countryCode}&appid=${apiKey}`;

// Make the API call using fetch()
fetch(apiUrl)
.then(response => response.json())
.then(data => {
// Process the response data as needed
console.log(data);
})
.catch(error => {
console.error(error);
});