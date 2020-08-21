import moment from "moment";
import "regenerator-runtime/runtime";
import getApi from "./getApi.js";
import showCards from "./getShowCards.js";

// Images

document.querySelector("#hide").style.display = "none";

document.querySelector("#run").onclick = () => {
  showCards();
  getApi();
};

moment().format();

// Adding moment
console.log("today is", moment().format("dddd"));
