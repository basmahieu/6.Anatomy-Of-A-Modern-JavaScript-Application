// On click event
export default function onClick() {
  document.querySelector("#run").onclick = () => {
    showCards();
    getApi();
    searchPhotos();
  };
}
