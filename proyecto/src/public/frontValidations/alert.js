window.addEventListener("load", function () {
    const eliminar = document.querySelector(".delete");

    eliminar.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Mostrar alerta de confirmación antes de eliminar
        const confirmarEliminar = confirm("¿Estás seguro de que deseas realizar esta acción?");
        
        // Si el usuario confirma, envía el formulario
        if (confirmarEliminar) {
            this.submit(); // Envía el formulario
        }
    });
});
