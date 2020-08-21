import { startApi, endApi } from "./getApiStatus.js";
import getLocation from "./getNameLocation.js";
import temp from "./getTemp.js";
import getIcons from "./getIcons.js";
import getDesc from "./getDesc.js";
import getDay from "./getDayName.js";

export const key = "78c03489433ef311c8fcb20a6343eb5b";
let inputValue = document.querySelector(".inputValue");

// Get data from openweather
export default function getApi() {
  const getLocalWeather = async (city) => {
    const base = "https://api.openweathermap.org/data/2.5/forecast?";
    const query = `&q=${city}&units=metric&appid=${key}`;

    startApi();
    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data);
    return data;
  };
  getLocalWeather(inputValue.value).then((data) => {
    endApi();
    // nextDays(data);
    // fiveDays(data);
    getLocation(data);
    getIcons(data);
    getDesc(data);
    temp(data);
    getDay(data);
  });
}
