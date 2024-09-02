function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 16; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

const form = document.getElementById('form');

const products = JSON.parse(localStorage.getItem('products') || '[]');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { name, price, photo, ingredients } = form;

    if (name.length < 2) {
        alert('O nome do produto deve ter mais que 2 caracteres');
        return;
    }

    if (price === 0) {
        alert('O preço do produto não pode ser igual a zero');
        return;
    }

    if (ingredients.length === 0) {
        alert('O produto deve haver pelo menos 1 ingrediente');
        return;
    }

    if (products.find((product) => product.name === name)) {
        alert('Já existe um produto com este nome!');
        return;
    }

    const product = {
        id: generateRandomId(),
        name,
        price,
        photo,
        ingredients
    }

    products.push(product);

    localStorage.setItem('products', JSON.parse(products))
})