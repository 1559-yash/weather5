const apiKey="d22af64222bbc947440dbdeccd2157f3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

let weatherIcon= document.querySelector(".weather-icon");

async function checkweather(city)
{
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = (data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png"
    }

    document.querySelector(".weather").style.display="block"

}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
});
searchBox.addEventListener('keydown',function(event){
    if(event.key ==='Enter'){
        event.preventDefault();
    }
    checkweather(searchBox.value);
});
