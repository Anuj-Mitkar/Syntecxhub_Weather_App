const url = `https://wttr.in/${city}?format=j1`;

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const url = `https://wttr.in/${city}?format=j1`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weatherCard").style.display = "block";

        document.getElementById("cityName").innerText = city;

        document.getElementById("temperature").innerText =
        `Temperature: ${data.current_condition[0].temp_C} °C`;

        document.getElementById("humidity").innerText =
        `Humidity: ${data.current_condition[0].humidity}%`;

    } catch(error) {

        console.log(error);
        alert("Error fetching weather");

    }
}