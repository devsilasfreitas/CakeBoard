const categoriesContainer = document.getElementById('categoriesList');

const categories = JSON.parse(localStorage.getItem('categories') || '[]');

categories.map(category => {
    const element = 
    `<div data-categoryId='${category.id}' onclick='update(this)'>
        <h3>${category.name}</h3>
    </div>`;

    categoriesContainer.innerHTML += element;
});

function update(ev) {
    console.log('atualizar')
    console.log(ev)
}