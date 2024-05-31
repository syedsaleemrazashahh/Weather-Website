const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
const API_KEY = "b3e90efbb5423e3395793dface9f64e6";
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
// const message = document.querySelector("#message");
const button = document.querySelector("#button1");
const container = document.querySelector("#container");

const formController = async (event) => {
  try {
    event.preventDefault();

    message.innerText = "loading...";
    temperature.innerText = "";
    humidity.innerText = "";
    button.disabled = true;

    const city = cityInput.value;

    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    message.innerText = "";

    form.reset();

    temperature.innerText = `${response.data.main.temperature}°C`;
    humidity.innerText = response.data.main.humidity;

    console.log("formController , response", response.data);
  } catch (error) {
    console.log("error", error);

    message.innerText = error?.response?.data?.message || "jj error";
  } finally {
    console.log("code run");

    message.innerText = "";

    button.disabled = false;
  }
  console.log("last line");
};

form.addEventListener("submit", formController);
