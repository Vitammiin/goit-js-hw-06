const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>.
// Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// ul
const listUl = document.querySelector("#ingredients");


const listLi = ingredients.map( item => {
 const liEl = document.createElement("li");
 liEl.textContent = item ;
 liEl.classList.add("item")
 console.log("li");
 return liEl;
 
});


listUl.append(...listLi);

console.log(listUl);



