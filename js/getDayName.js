// Day name of the week
export default function getDay(dayNameValues) {
  let weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );

  for (let i = 0; i < 5; i++) {
    let daysNew = document.querySelector(".daysNew" + [i]);
    let daysData = new Date(dayNameValues.list[i * 8].dt_txt).getDay();
    let daysValue = weekday[daysData];
    daysNew.innerHTML = daysValue;

    console.log(daysValue);
  }
}
