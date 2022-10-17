const api_key=`049f66378d94dab7f13562ec2a027600`;
const button=document.getElementById("button");
const search=document.getElementById("search");
const weather=document.getElementById("weather");

button.addEventListener(
    "click",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)

const getWeather = async(city)=>{
    weather.innerHTML=`<h2>Loding........</h2>`;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}&units=metric`
    const response = fetch(url);
    const data=await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather=(data)=>{
    console.log(data)
    if(data.cod!="200"){
        weather.innerHTML=`<h2>City Not Found</h2>`;
    }else{weather.innerHTML=`
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <h2>${data.name}, ${data.sys.country}</h1>
                <h1>${data.main.temp} &degC</h1>
                <h4>(max_temp : ${data.main.temp_max},</h4>
                <h4>min_temp : ${data.main.temp_min})</h4>
                <br>
                <h4>weather : ${data.weather[0].main}</h4>
                <br>
                <h4>discription : ${data.weather[0].description}</h4>
                <br>
                <h4>wind speed : ${data.wind.speed}</h4>
                <br>
                <h4>humidity : ${data.main.humidity}</h4>
                <br>
                <h4>lon : ${data.coord.lon}</h4>
                <br>
                <h4>lat : ${data.coord.lat}</h4>
            </div>
    `
}}

