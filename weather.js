async function fetchWeather() {
    let cityName = document.getElementById("cityName").value.trim();
    let city = document.getElementById("city");
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let errorMessage = document.getElementById("errorMessage");

    if (cityName === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    let apiKey = "5812881db4f768883577d7d1c0bb2903";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found.");
        }

        let data = await response.json();

        city.textContent = `Weather in ${data.name}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Condition: ${data.weather[0].description}`;
        errorMessage.textContent = "";
    } catch (error) {
        errorMessage.textContent = "City not found. Please try again.";
        city.textContent = "";
        temperature.textContent = "";
        description.textContent = "";
    }
}
