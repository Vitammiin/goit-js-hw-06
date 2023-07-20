// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.getElementById(`name-input`);
const output = document.getElementById(`name-output`);

output.addEventListener(`click`, () => {
const saveName = input.value.trim() ;
console.log(saveName)
if(saveName === ``){
    output.textContent = `Anonymous`;
} else {
    output.textContent = saveName;
}
});