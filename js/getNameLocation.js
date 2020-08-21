// Get Name location
export default function getLocation(locationData) {
  let name = document.querySelector(".name");
  let nameValue = locationData["city"]["name"];
  name.innerHTML = nameValue;

  console.log(nameValue);
}
