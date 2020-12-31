import format from "date-fns/format";

export default function () {
  const containerEl = document.querySelector(".js-chooser");

  if (!containerEl) {
    return;
  }

  const spinEl = document.querySelector(".js-chooser-spin");
  const copyEl = document.querySelector(".js-chooser-copy");
  const resultsEl = document.querySelector(".js-chooser-results");

  const colourArray = [
    { name: "Yellow", colour: "text-yellow-300" },
    { name: "Dark Blue", colour: "text-blue-700" },
    { name: "Light Blue", colour: "text-blue-300" },
    { name: "Orange", colour: "text-yellow-500" },
    { name: "Green", colour: "text-green-600" },
    { name: "Red", colour: "text-red-500" },
  ];

  window.addEventListener("DOMContentLoaded", () => {
    spinEl.addEventListener("click", () => {
      newColour();
    });
  });

  function newColour() {
    const randomItem =
      colourArray[Math.floor(Math.random() * colourArray.length)];
    copyEl.innerHTML = `<p>Your Colour is: <span class="text-3xl font-medium ${randomItem.colour}">${randomItem.name}</span></p>`;

    const theDate = format(new Date(), "HH:mm:ss");
    const newListItem = document.createElement("li");
    newListItem.appendChild(
      document.createTextNode(`${theDate} - ${randomItem.name}`)
    );
    resultsEl.prepend(newListItem);
  }
}
