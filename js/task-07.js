// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const sizeControl = document.getElementById("font-size-control");

const textElement = document.getElementById("text")

sizeControl.addEventListener("input", function() {
    const sizeControlValue = sizeControl.value + "px";
    textElement.style.fontSize = sizeControlValue;

});





