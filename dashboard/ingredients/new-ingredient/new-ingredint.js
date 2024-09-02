function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 16; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

const form = document.getElementById('form');

const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { name, price, photo } = form;
    if (name.length < 2) {
        alert('O nome do ingrediente deve ter mais que dois caracteres!');
        return;
    }

    if (price === 0) {
        alert('O preço do ingrediente não pode ser igual a zero!');
        return;
    }

    if (ingredients.find((ingredient) => ingredient.name === name)) {
        alert('Já existe com ingrediente com este nome!');
        return;
    }

    const ingredient = {
        id: generateRandomId(),
        name,
        price,
        photo
    }

    ingredients.push(ingredient);

    localStorage.setItem('ingredients', JSON.stringify(ingredients));
})