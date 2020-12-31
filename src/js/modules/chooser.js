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
    { name: "Person", colour: "text-yellow-300" },
    { name: "World", colour: "text-blue-700" },
    { name: "Object", colour: "text-blue-300" },
    { name: "Action", colour: "text-yellow-500" },
    { name: "Nature", colour: "text-green-600" },
    { name: "Random", colour: "text-red-500" },
    { name: "&#9824;", colour: "text-gray-900" },
  ];

  window.addEventListener("DOMContentLoaded", () => {
    spinEl.addEventListener("click", () => {
      newColour();
    });
  });

  function newColour() {
    const randomItem =
      colourArray[Math.floor(Math.random() * colourArray.length)];
    copyEl.innerHTML = `<p>Your category is: <span class="text-3xl font-medium ${randomItem.colour}">${randomItem.name}</span></p>`;

    const theDate = format(new Date(), "HH:mm:ss");
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `${theDate} - ${randomItem.name}`;
    resultsEl.prepend(newListItem);
  }
}
