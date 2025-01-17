document.getElementById("enlace_1").addEventListener("click", function(){

    let contenido1 = document.getElementById("contenidos_1")

    if(contenido1.style.display == "none") {
        contenido1.style.display = "block";
    } else {
        contenido1.style.display = "none"; 
        this.innerHTML = "Mostrar contenido"; 
    }
})

document.getElementById("enlace_2").addEventListener("click", function(){

    let contenido2 = document.getElementById("contenidos_2")

    if(contenido2.style.display == "none") {
        contenido2.style.display = "block";
    } else {
        contenido2.style.display = "none";
        this.innerHTML = "Mostrar contenido";  
    }
})

document.getElementById("enlace_3").addEventListener("click", function(){

    let contenido3 = document.getElementById("contenidos_3")

    if(contenido3.style.display == "none") {
        contenido3.style.display = "block";
    } else {
        contenido3.style.display = "none";
        this.innerHTML = "Mostrar contenido";  
    }
})