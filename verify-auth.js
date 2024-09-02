const userId = localStorage.getItem('userId');
const users = JSON.parse(localStorage.getItem('users')) || [];

const user = users.find(user => user.id === userId);

if (!user && window.location.pathname !== '/auth/sign-in/' && window.location.pathname !== '/auth/sign-up/') {
    window.location.href = '/auth/sign-in';
}

if (user && (window.location.pathname === '/auth/sign-in' || window.location.pathname === '/auth/sign-up')) {
    window.location.href = '/dashboard';
};

sessionStorage.setItem('user', JSON.stringify(user));