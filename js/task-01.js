let categoriesEl = document.getElementById("categories");
const elItems = [...categoriesEl.children];
const countEl = elItems.length;

console.log("Number of categories: ", countEl);

elItems.forEach((item) => {
    const categoryTitle = item.querySelector('h2').textContent;
    console.log("Category: ", categoryTitle);
    const categoryElements = item.querySelectorAll('li');
    console.log("Elements: ", categoryElements.length);
});
