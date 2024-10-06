import data from "./data.json";

// DOM Targeting
const cardsRow = document.querySelector("#cards-row");
const inputEl = document.querySelector("input");

for (let pokemonObj of data) {
  const p = document.createElement("p");
  p.textContent = pokemonObj.name;
  cardsRow.appendChild(p);
}

// Focus input on / keypress
document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    // Don't input /
    event.preventDefault();
    inputEl.focus();
  }
});
