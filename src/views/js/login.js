function iniciarSesion() {
    console.log("Si funciona ")
    const tipoUsuario = document.getElementById('tipoUsuario').value;
    
    // Aquí puedes agregar la lógica para redirigir al usuario según su selección
    if (tipoUsuario === 'Sistemas') {
        window.location.href = 'sistemas'; // Redirige a la página de Sistemas
    } else if (tipoUsuario === 'Dosificación') {
        window.location.href = 'dosificacion'; // Redirige a la página de Dosificación
    }
}