// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.

const counterValue = 0;

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
const plus = document.querySelector(`[data-action="increment"]`);
const minus = document.querySelector(`[data-action="decrement"]`);

plus.addEventListener(`click`, () => {
console.log(`Увеличение значения`)
});

minus.addEventListener(`click`, () => {
    console.log(`Уменьшение значения`)
    });
// Обновляй интерфейс новым значением переменной counterValue.

