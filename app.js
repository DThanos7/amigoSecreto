
// Lista donde guardaremos los nombres
let listaAmigos = [];

function agregarAmigo() {
    const nombreIngresado = document.getElementById("amigo"); // Hacemos referencia al elemnto "amigo" del DOM con la variable "nombreIngresado".
    const nombreFinal = nombreIngresado.value.trim(); // Eliminamos espacios extra

    //Primera validacion: revisar que el nombre tenga caracteres y no sea un espacio en blanco.
    if (nombreFinal === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    //Segunda validacion: revisar que el nombre no se repita
    if (listaAmigos.includes(nombreFinal)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    //Utilizamos "Push" para evitar sobreescribir la lista de arreglo. Utilizan push nos aseguramos de que el nombre nuevo se agregue a la lista sin afectar los otros nombres ya guardados.
    listaAmigos.push(nombreFinal);//Guardamos los nombres dentro de la lista "listaAmigos"
    actualizarLista();//Mandamos a llamar a la funcion "actializarLista"
    nombreIngresado.value = ""; // Limpiar el campo después de agregar
}
    // Limpiar lista antes de actualizar.
    function actualizarLista() {
    const ul = document.getElementById("listaAmigos");// Hacemos referencia al elemento <ul> a la variable ul
    ul.innerHTML = ""; //limpiamos el elemento ul (la lista)

    listaAmigos.forEach(nombreFinal => {
        const li = document.createElement("li"); // Como no fijamos un limite de cuantos nombres se pueden ingresar, creamos de forma dinamica la lista, creando un li cada que se ingresa un nombre.
        li.textContent = nombreFinal; // Guardamos el nombre dentro de la variable li, lo hacemos como texto, para no afectar elementos HTML, unicamente la(s) variable.
        ul.appendChild(li); //Agregamos los elementos <li> nuevos dentro del elemento <lu> de nuestro DOM.
    });
}

    function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return; //Verificamos que la lista (listaAmigos) no este vacia. Si esta vacia mandamos a pedir que se ingresen nombres. 
    }
    //Generamos un numero random entre 0 y el length de nuestra lista. Para asi poder mandar a llamar a lista en el indice "indiceAleatorio".
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceAleatorio]; // Guardamos el nombre que mandamos a llamar, dentro de la variable "nombreSorteado"

    const resultado = document.getElementById("resultado");// Hacemos referencia al elemento "resultado" dentro del DOM a la variable "resultado"
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong> 🎉</li>`; //Como el elemento "resultado" es un <ul> dentro del DOM, agregamos un nuevo elemento <li> por medio de la funcion "innerHTML".
    //Al hacerlo de esta forma, podemos agregar la etiqueta <strong> ya que estamos haciendo referencia al elemento dentro del DOM. 
}
