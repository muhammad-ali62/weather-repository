
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
async function checkWeather(city) {
    const api_key = "739bf7b9d75cac7ab79ab3c14b69976f";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(url).then(response => response.json());
console.log(weather_data);
if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
     weather_body.style.display = "none";
    console.log("error");
    return;
}
    
    for (let i = 0; i < 5; i++) {
        const day = weather_data.list[i];

        document.getElementById(`temp${i + 1}`).textContent = `${Math.round(day.main.temp - 273.15)}°C`; 

        document.getElementById(`humidity${i + 1}`).textContent = `${day.main.humidity}%`;

        document.getElementById(`desp${i + 1}`).textContent = day.weather[0].description; 
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

