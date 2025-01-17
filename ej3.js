function informacion(elEvento) {
    let evento = elEvento || window.event;
    let x = evento.clientX;
    let y = evento.clientY;
    let dimensiones = tamanoVentanaNavegador();

    let zona = "";
    if (x < dimensiones[0] / 2 && y < dimensiones[1] / 2) {
        zona = "Esquina superior izquierda";
    } else if (x >= dimensiones[0] / 2 && y < dimensiones[1] / 2) {
        zona = "Esquina superior derecha";
    } else if (x < dimensiones[0] / 2 && y >= dimensiones[1] / 2) {
        zona = "Esquina inferior izquierda";
    } else {
        zona = "Esquina inferior derecha";
    }

    muestraInformacion([
        "Zona clicada",
        `Coordenadas: (${x}, ${y})`,
        `Zona: ${zona}`
    ]);
}

function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (let i = 1; i < mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
    }
}

function tamanoVentanaNavegador() {
    let dimensiones = [];
    if (typeof(window.innerWidth) == 'number') {
        dimensiones = [window.innerWidth, window.innerHeight];
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        dimensiones = [document.body.clientWidth, document.body.clientHeight];
    }
    return dimensiones;
}

document.onclick = informacion;