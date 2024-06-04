const apiKey = "2d4ffe9f08c08573aeda790c437c6941";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "img/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "img/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "img/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "img/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "img/mist.png";
                break;
            default:
                weatherIcon.src = "img/default.png"; 
                break;
        }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{checkWeather(searchBox.value);})


