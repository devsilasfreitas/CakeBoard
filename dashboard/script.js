const welcome = document.getElementById('dashboard-welcome');

if (user) {
    welcome.innerText = `Bem vindo(a) novamente, ${user.fantasyName}!`;
}
