const apikey = "adc470755e2952b4033d510fee92a57a"
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    
    var data = await response.json()

    

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%"

    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main == 'Clouds'){
      weatherIcon.src = "images/cloudy.png"
    }
    else if(data.weather[0].main == 'Clear'){
      weatherIcon.src = "images/sun.png"
    }
    else if(data.weather[0].main == 'Rain'){
      weatherIcon.src = "images/rainy-day.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
      weatherIcon.src = "images/raining.png"
    }
    else if(data.weather[0].main == 'Mist'){
      weatherIcon.src = "images/Mist.png"
    }
    else if(data.weather[0].main == 'Snow'){
      weatherIcon.src = "images/snow.png"
    }

    console.log(data)
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
