const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
    window.location.href = '/auth/sign-in';
}

