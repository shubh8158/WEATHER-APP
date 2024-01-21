const apiKey="19833ed0bb3f3f22e0c2aa27f4709e8d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const icon=document.querySelector(".weather")
async function checkWeather(city){
    const res=await fetch(apiurl + city +`&appid=${apiKey}`);
    if(res.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".main").style.display="none";
    }
    else{
    var data=await res.json();
    

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";

    if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
    icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        icon.src="images/mist.png";
    }
    
    document.querySelector(".main").style.display="block";
    document.querySelector(".error").style.display="none";
}
}
btn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

