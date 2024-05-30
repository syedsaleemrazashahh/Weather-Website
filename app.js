const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
const API_KEY = "b3e90efbb5423e3395793dface9f64e6";
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const message1 = document.querySelector("#message");
const button = document.querySelector("#button1");

const formController = async (event) => {
  try {
    event.preventDefault();

    message1.innerText = "loading...";

    temperature.innerText = "";
    humidity.innerText = "";
    button.disabled = true;

    const city = cityInput.value;

    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    form.reset();

    message1.innerText = "";

    
    temperature.innerText = `${response.data.main.temp}°C`;
    humidity.innerText = response.data.main.humidity;

    console.log("formController , response", response.data);

  } catch (error) {
    //console.log("error" , error);

    message1.innerText = error?.response?.data?.message || "unknown error";

  } finally {
   console.log ("coderuning" );

    message1.innerText =  "";

    button.disabled = false;
  }
  console.log ("lastline" );
};

form.addEventListener("submit", formController);
