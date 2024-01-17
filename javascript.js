
const forecastButton = document.getElementById("forecast-button")
const locationInput = document.getElementById("location-input")

const containerBody = document.getElementById("container-body")
const locationName = document.getElementById("location-name")
const weatherIcon = document.getElementById("weather-icon")
const temperature = document.getElementById("temperature")
const weather = document.getElementById("weather")
let weatherLocation = locationInput.value


//gets forecast data from API
function getForecast(forecastLocation){
    fetch(`https://api.weatherapi.com/v1/current.json?key=1bb27c67212141f19e415441232912&q=${forecastLocation}`, {mode: 'cors'})
    .then(function(response){
        if(response.status === 400){
            throw new Error("bad request")
        }else{
            return response.json()
        }
    }).then(function(data){
        forecastDOM(data)
    }).catch(function(error){
        alert("error: location not found")
    })
  
}

//adds forecast data to the DOM
function forecastDOM(forecastData){
    locationName.textContent = forecastData.location.name

    temperature.textContent = forecastData.current.temp_c + "°C"

    weather.textContent = forecastData.current.condition.text
}





//error handling
forecastButton.addEventListener("click", () => {
    let weatherLocation = locationInput.value;
    if (weatherLocation) {
        getForecast(weatherLocation);
    } else {
        console.error("No location entered");
    }
})



