// Funcion para mostrar un cuadro de dialogo emergente
function mostrarMensaje(){
    alert("Hola mundo !)");
}

//variables

function Imprimirvariables(){
    let nombre = "yo"
    let edad = "20";
    console.log("nombre: ", nombre)
    console.log("edad: ", edad)
// forma moderna de concatenar cadenas
    console.log(`nombre:${nombre},edad: ${edad}`)
    console.error("Error lo que sea")
    console.warn("Advertencia de triple x")
}

function arreglos(){
    let fruta = ['manzana', 'pera', 'banana']
    for (;et f of frutas){
        console.log(f)
    }
}