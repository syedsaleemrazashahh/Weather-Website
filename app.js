const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
const API_KEY = "b3e90efbb5423e3395793dface9f64e6";
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");

const formController = async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
  );
  const data = await response.json();

  temperature.innerText = data.main.temperature;
  humidity.innerText = data.main.humidity;

  console.log(formController, response, data);
};

form.addEventListener("submit", formController);
