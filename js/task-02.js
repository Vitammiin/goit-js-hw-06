const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Находим элемент ul#ingredients
const ulIngredients = document.getElementById('ingredients');


// Создаем фрагмент (DocumentFragment) для оптимизации добавления элементов

const fragment = document.createDocumentFragment();

// // Используем цикл для создания и добавления каждого <li> элемента в фрагмент

ingredients.forEach((ingredient) =>
{

});



// ingredients.forEach((ingredient) => {
//   const liElement = document.createElement('li');
//   liElement.textContent = ingredient;
//   liElement.classList.add('item');
//   fragment.appendChild(liElement);
// });
//1 Создаст отдельный элемент <li>. 
//1.1 Обзательно используй метод document.createElement().

const liIngre = document.createElement('li')

//2 Добавит название ингредиента как его текстовое содержимое.
for (const liIngre of ingredients) {
 console.log(liIngre);
  
}

//3 Добавит элементу класс item.
liIngre.classList.add('item');

//4 После чего вставит все <li> за одну операцию в список ul#ingredients.
ingredients.appendChild(liIngre);



// // Используем цикл для создания и добавления каждого <li> элемента в фрагмент
// ingredients.forEach((ingredient) => {
//   const liElement = document.createElement('li');
//   liElement.textContent = ingredient;
//   liElement.classList.add('item');
//   fragment.appendChild(liElement);
// });

// // Вставляем все <li> элементы одной операцией в список ul#ingredients
// ingredientsList.appendChild(fragment);