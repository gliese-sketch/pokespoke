import data from "./data.json";

// DOM Targeting
const cardsRow = document.querySelector("#cards-row");
const inputEl = document.querySelector("input");

for (let pokemonObj of data) {
  const div = document.createElement("div");
  div.classList.add("col");

  div.innerHTML = `
  <div class="card">
    <img
      src="${pokemonObj.image}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${pokemonObj.name}</h5>
      <p class="card-text">
        ${pokemonObj.description}
      </p>
    </div>
  </div>
  `;

  cardsRow.appendChild(div);
}

// Focus input on / keypress
document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    // Don't input /
    event.preventDefault();
    inputEl.focus();
  }
});
