// Show description
export default function getDesc(descData) {
  for (let i = 0; i < 5; i++) {
    let desc = document.querySelector(".desc" + [i]);
    let descValue = descData["list"][i * 8]["weather"][0]["description"];
    desc.innerHTML = descValue;

    console.log(descValue);
  }
}
