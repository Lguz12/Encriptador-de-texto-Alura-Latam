
let encript=document.querySelector('#TextoEncriptado')
function CapturarTexto() {
    let texto=document.querySelector('#ValorTexto').value;
    // toma el valor del input
    textoencript= encriptarTexto(texto)
    // ingresa el valor y realiza la funcion con el parametro que del texto
    encript.innerHTML=textoencript 
    limpiar()
}
function desencriptar() {
    let texto=document.querySelector('#ValorTexto').value;
        // toma el valor del input
    textoencript= desencriptarTexto(texto)
        // ingresa el valor y realiza la funcion con el parametro que del texto
    encript.innerHTML=textoencript 
    limpiar(texto)

}
function limpiar(){
document.querySelector('#ValorTexto').value="";}

function encriptarTexto(texto) {
    // Validacion que el texto no contenga mayúsculas ni caracteres especiales
    const regex = /^[a-z ]+$/;
    if (!regex.test(texto)) {
        return "El texto contiene caracteres no permitidos. Usa solo letras minúsculas y espacios.";
    }

    // Reemplazar las letras segun las letras
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    // Validacion que el texto no contenga mayúsculas ni caracteres especiales
    const regex = /^[a-z ]+$/;
    if (!regex.test(texto)) {
        return "El texto contiene caracteres no permitidos. Usa solo letras minúsculas y espacios.";
    }

    // Reemplazar las letras segun las letras
    let textoEncriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");


    return textoEncriptado;
}
function impiar(){
let t= document.querySelector('#ValorTexto').value="";

}

function copy() {
    const div = document.getElementById("TextoEncriptado");
    // Deja el tecto en variable
    const seleccion = document.createRange();
    //crea un rango    
    seleccion.selectNodeContents(div);
    // el rango tome el contenido
    const seleccionador = window.getSelection();
    // Se selecciona el rango de texto
    seleccionador.removeAllRanges();
     // Limpiar cualquier selección anterior
    seleccionador.addRange(seleccion);
    //añada el rango al objeto

    try {
        // Intentar copiar el contenido seleccionado al portapapeles
        document.execCommand("copy");
    } catch (err) {
        alert("No se pudo copiar el texto.");
    }

    // Limpiar la selección del rango
    seleccionador.removeAllRanges();
}
const button=document.querySelector('#button')
const dialog=document.querySelector('dialog')
button.addEventListener('click',()=>{
    dialog.showModal()
})


































// function Enncriptar() {
// for (let index = 0; index < array.length; index++) {
//     const texto = array[index];
    
// }
// }