// Show temperature
export default function temp(tempData) {
  for (let i = 0; i < 5; i++) {
    let temp = document.querySelector(".temp" + [i]);
    let tempValue = tempData["list"][i * 8]["main"]["temp"];
    temp.innerHTML = Math.round(tempValue) + "°";

    console.log(tempValue);
  }
}
