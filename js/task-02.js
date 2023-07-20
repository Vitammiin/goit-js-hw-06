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

// Используем цикл для создания и добавления каждого <li> элемента в фрагмент

ingredients.forEach((ingredient) =>
{
const liElement = document.createElement('li');
liElement.textContent = ingredient;
liElement.classList.add('item');
fragment.appendChild(liElement);
});

// Вставляем все <li> элементы одной операцией в список ul#ingredients

ulIngredients.appendChild(fragment);



