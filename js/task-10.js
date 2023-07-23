function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


{/* <div id="controls">
<input type="number" min="1" max="100" step="1" />
<button type="button" data-create>Create</button>
<button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div> */}

const boxes = document.getElementById("boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input[type='number']");

destroy.addEventListener("click", boxes);