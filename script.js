const user = JSON.parse(localStorage.getItem('user'));
const link = document.getElementById('access-link');

if (!user) {
    link.setAttribute('href', '/dashboard');
    link.innerText = 'Dashboard';
}