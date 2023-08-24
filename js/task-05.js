// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output.
//  Если инпут пустой, 
// в спане должна отображаться строка "Anonymous".
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
let anonymous = "Anonymos";

nameOutput.textContent = anonymous;


nameInput?.addEventListener("input", OnInput);

function OnInput(event) {
    nameOutput.textContent = event.target.value || anonymous;
}
 console.log(nameOutput);
 