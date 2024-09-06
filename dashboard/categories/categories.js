const categoriesContainer = document.getElementById('categoriesList');
const categoryDetails = document.getElementById('categoryDetails');

const categories = JSON.parse(localStorage.getItem('categories') || '[]').filter((category) => category.userId === user.id);
const products = JSON.parse(localStorage.getItem('products') || '[]').filter((product) => product.userId === user.id);

categories.map(category => {
    const element = 
    `<div data-categoryId='${category.id}' onclick='update(this)'>
        <h3>${category.name}</h3>
    </div>`;

    categoriesContainer.innerHTML += element;
});

function update(element) {
    const categoryId = element.dataset.categoryid;
    const category = categories.find((category) => category.id === categoryId);
    const categoryProducts = products.filter((product) => product.categoryId === category.id);

    const productsList = categoryProducts.map((product) => {
        return `<li>${product.name}</li>`;
    }).join('');

    const categoryElement = 
    `<div>
        <h3>${category.name}</h3>
        <p>Produtos:</p>
        <ul>${productsList}</ul>
    </div>`;
    categoryDetails.innerHTML = categoryElement;
}