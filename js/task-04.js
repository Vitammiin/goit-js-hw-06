// Счетчик состоит из спана и кнопок, которые, при клике,
//  должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>



// Создай переменную counterValue в которой будет храниться
//  текущее значение счетчика и инициализируй её значением 0.
let counterValue = 0;
let value = document.getElementById("value");

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
let increment = document.querySelector("button[data-action='increment']");
let decrement = document.querySelector("button[data-action='decrement']");



function incr(event){
    counterValue += 1;
    value.textContent = counterValue;
    
  
};

function decr(event){
    counterValue -= 1;
    value.textContent = counterValue;
    
};

increment.addEventListener("click", incr);
decrement.addEventListener("click", decr);


// Обновляй интерфейс новым значением переменной counterValue.