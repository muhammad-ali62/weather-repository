
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
async function checkWeather(city) {
    const api_key = "739bf7b9d75cac7ab79ab3c14b69976f";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(url).then(response => response.json());
console.log(weather_data);
    // Manually assign data to each day
    for (let i = 0; i < 5; i++) {
        const day = weather_data.list[i];

        // Set temperature and humidity for each day
        document.getElementById(`temp${i + 1}`).textContent = `${Math.round(day.main.temp - 273.15)}°C`; // Convert from Kelvin to Celsius
        document.getElementById(`humidity${i + 1}`).textContent = `${day.main.humidity}%`;

        // Set description for each day
        document.getElementById(`desp${i + 1}`).textContent = day.weather[0].description; // Weather description
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

