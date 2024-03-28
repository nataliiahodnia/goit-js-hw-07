function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#controls input");
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  createButton.addEventListener("click", function () {
    const count = parseInt(input.value);
    if (count < 1 || count > 100 || isNaN(count)) {
      alert("Будь ласка, введіть число від 1 до 100.");
      return;
    }

    createBoxes(count);
    input.value = "";
  });

  destroyButton.addEventListener("click", function () {
    destroyBoxes();
  });

  function createBoxes(count) {
    boxesContainer.innerHTML = "";
    
    let size = 30;
    
    for (let i = 0; i < count; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      
      boxesContainer.appendChild(box);
      
      size += 10;
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }
});
