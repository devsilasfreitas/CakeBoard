const welcome = document.getElementById('dashboard-welcome');
const email = localStorage.getItem('user');

welcome.innerText = `Bem vindo(a) novamente, ${email}!`;
