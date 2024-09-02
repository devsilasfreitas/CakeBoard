const link = document.getElementById('access-link');
const user = sessionStorage.getItem('user');

if (user) {
    link.setAttribute('href', '/dashboard');
    link.innerText = 'Dashboard';
}