let parrafo = document.querySelector("#parrafo");

document.addEventListener("keydown", muestraCaracter)

function muestraCaracter(e) {
    parrafo.innerHTML = `
    Tecla: [${e.key}]
    Código: [${e.keyCode}]
    `
}

document.getElementById("info").style.backgroundColor = "skyblue";