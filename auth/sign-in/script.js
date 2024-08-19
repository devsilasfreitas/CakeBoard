const user = localStorage.getItem('user');

if (user) {
    window.location.href = '/dashboard';
}

const form = document.getElementById('form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const email = form.email;
    const password = form.password;
    const users = JSON.parse(localStorage.getItem('users'));
    console.log(users)
    const user = users.find(user => user.email === email.value);
    if (!user) return window.alert('Este email não existe');
    if (user.password === password.value) {
        localStorage.setItem('user', email.value);
        window.location.href = '/dashboard'
    } else {
        window.alert('Senha Inválida');
    }
});