function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML =  mensaje[0];
    for (let i = 1; i < mensaje.length; i++) {
        document.getElementById("info").innerHTML += mensaje[i];
    }
}
let pantalla = document.querySelector("#pantalla");
document.addEventListener("mousemove", mostrarPosicion);


function mostrarPosicion(e) {
    pantalla.innerText = `
    Pagina: [${e.screenX}, ${e.screenY}]
    Navegador: [${e.clientX}, ${e.clientY}]`;
}


