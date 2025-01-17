document.addEventListener('DOMContentLoaded', function () {
    let infoBox = document.getElementById('info');

    document.addEventListener('mousemove', function (event) {
        let mensaje = [
            'Evento del ratón',
            `Posición en la ventana: (${event.clientX}, ${event.clientY})`,
            `Posición en la página: (${event.pageX}, ${event.pageY})`
        ];
        muestraInformacion(mensaje);
        infoBox.style.backgroundColor = '#FFFFFF';
    });

    document.addEventListener('keydown', function (event) {
        let mensaje = [
            'Evento de teclado',
            `Tecla pulsada: ${event.key}`,
            `Código de tecla: ${event.code}`
        ];
        muestraInformacion(mensaje);
        infoBox.style.backgroundColor = '#CCE6FF';
    });

    document.addEventListener('mousedown', function (event) {
        let mensaje = [
            'Evento de clic del ratón',
            `Botón pulsado: ${event.button}`,
            `Posición en la ventana: (${event.clientX}, ${event.clientY})`
        ];
        muestraInformacion(mensaje);
        infoBox.style.backgroundColor = '#FFFFCC';
    });
});

function muestraInformacion(mensaje) {
    let infoBox = document.getElementById('info');
    infoBox.innerHTML = `<h1>${mensaje[0]}</h1>`;
    for (let i = 1; i < mensaje.length; i++) {
        infoBox.innerHTML += `<p>${mensaje[i]}</p>`;
    }
}
