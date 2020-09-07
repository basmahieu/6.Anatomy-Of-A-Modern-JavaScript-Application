// Show icon
export default function getIcons(iconData) {
  for (let i = 0; i < 5; i++) {
    let icon = document.querySelector(".icon" + [i]);
    let iconValue = iconData["list"][i]["weather"][0]["icon"];
    let iconSrc = `/img/icons/${iconValue}.svg`;
    icon.setAttribute("src", iconSrc);

    console.log(iconSrc);
  }
}
