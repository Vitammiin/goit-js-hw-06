//   1

// Находим элемент ul#categories
const categoriesList = document.querySelector('#categories');


// Находим все элементы li.item внутри ul#categories

const categoryItems = document.querySelectorAll('.item');


// Подсчитываем и выводим количество категорий
console.log(`Number of categories: ${categoryItems.length}`);

// 2 

// Обходим каждый элемент li.item и выводим информацию о категории
categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    console.log( ` Category: ${categoryTitle}`);
    

    const categoryElements = item.querySelectorAll('li');
    console.log(` Elements ${categoryElements.length}`);
});

 



