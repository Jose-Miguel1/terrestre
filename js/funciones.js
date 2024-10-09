// const checkbox = document.getElementById('interrutor');

// // Añadir un evento para detectar cambios en el checkbox
// checkbox.addEventListener('change', function() {
//     if (this.checked) {
//         // Cambiar el color de fondo del body cuando el checkbox esté marcado
//         document.body.style.backgroundColor = '#3d3d3d';
//     } else {
//         // Volver al color de fondo original cuando el checkbox no esté marcado
//         document.body.style.backgroundColor = 'white';
//     }
// });


const toggleSwitch =document.getElementById('interrutor'); // Tu checkbox del modo oscuro
    const currentTheme = localStorage.getItem('theme'); // Obtener el tema almacenado

    // Si ya hay un tema guardado, se lo aplica al body
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true; // Mantener activado el interruptor si está en modo oscuro
        }
    }

    // Función que cambia el tema
    function switchTheme(event) {
        if (event.target.checked) {
            document.body.classList.add('dark-mode'); // Aplicar clase de modo oscuro
            localStorage.setItem('theme', 'dark-mode'); // Guardar en localStorage
        } else {
            document.body.classList.remove('dark-mode'); // Remover clase de modo oscuro
            localStorage.setItem('theme', 'light-mode'); // Guardar en localStorage
        }
    }

    // Escuchar el cambio de estado en el interruptor
    toggleSwitch.addEventListener('change', switchTheme);


window.addEventListener("load", function () {
    // Simular un retraso de 3 segundos antes de ocultar el loader
    setTimeout(function () {
        const loader = document.getElementById("carga");
        loader.classList.add("hidden");
    }, 1000); 
}); 