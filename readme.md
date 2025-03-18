<h1> Amigo Secreto </h1>

Este proyecto permite organizar un sorteo de "Amigo Secreto" ingresando nombres y seleccionando aleatoriamente un participante. Una vez realizado el sorteo, el botón se deshabilita para evitar múltiples sorteos.

 Características

Agregar nombres a una lista.

Validar que los nombres no se repitan.

Sortear un nombre aleatorio de la lista.

Deshabilitar el botón de sorteo después de su uso.

 Uso del Proyecto

Ingresa un nombre en el campo de texto.

Presiona el botón "Añadir" para guardarlo en la lista.

Una vez agregados los participantes, presiona "Sortear amigo".

El sistema mostrará el nombre del amigo secreto y deshabilitará el botón.

 Estructura del Proyecto

index.html: Contiene la estructura de la página.

style.css: Maneja los estilos y diseño.

app.js: Contiene la lógica del sorteo y las validaciones.

 Código Destacado

El botón de sorteo se deshabilita con la siguiente función:

function deshabilitarBoton() {
    const botonSortear = document.querySelector(".button-draw");
    botonSortear.disabled = true;
    botonSortear.style.backgroundColor = "gray";
    botonSortear.style.cursor = "not-allowed";
}

🛠️ Tecnologías Utilizadas

HTML

CSS

JavaScript
