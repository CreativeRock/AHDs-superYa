document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();//Evitar que el formulario se envie automaticamente al servidor

    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;

    //SIMULACIÓN básica de login
    if (usuario === 'admin@admin' && pass === '1234') {
        window.location.href = '../private/dashboard.html';
    }
    else {
        document.getElementById('mensajeLogin').textContent = "Usuario o contraseña incorrectos."
    }
});