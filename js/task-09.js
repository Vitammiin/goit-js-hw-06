function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color и 
// выводит значение цвета в span.color.

const body = document.querySelector("body");
const widget = document.querySelector('.widget');
const colorSpan = widget.querySelector('.color');
const changeColorButton = widget.querySelector('.change-color');
changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});