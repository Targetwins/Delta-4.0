function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showLogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
}

function showSignup() {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';
}
