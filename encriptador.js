let textoNoEncriptado = " ";
let arregloDePalabras = [];
let caracteresEspeciales = [];
let mensajeEncriptado = [];
let patronDePrueba = /[^a-z ]/;
let count = 0;
let impresion = " ";
let texto = "";
let bTn = "";
asignarTextoElemento('dato0', 'Bienvenido al encriptador de texto');
asignarTextoElemento('dato1', 'Por favor ingresa el texto sin caracteres especiales o mayusculas');
let elementoHTML2 = document.getElementById('output_texto').style.display = "none";

// funciones para limpiar y devolver errores 
function asignarTextoElemento(id, texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return;
}
function divisionDeTexto(btn) {
    let elementoHTML2 = document.getElementById('output_texto').style.display = "flex";
    let elementoHTML3 = document.getElementById('imagen_aca').style.display = "none";
    textoNoDividido = document.getElementById("input_texto").value;
    let noEspacios = textoNoDividido.trim();
    arregloDePalabras = noEspacios.split(" ");
    asignarTextoElemento('texto_de_error', ``);
    bTn = btn.id;
    arregloDePalabras.forEach(comprobacionDeCaracteres);  
}
function comprobacionDeCaracteres (valor) {
    if (patronDePrueba.test(valor)){
        caracteresEspeciales.push(valor);
        impresion += valor + " - ";
        asignarTextoElemento('texto_de_error', `Revise los siguientes palabras y
             elimine los caracteres o mayusculas: ${impresion} `);
    }else if (caracteresEspeciales.length != 0) {
        let valor_total = caracteresEspeciales.length;
        caracteresEspeciales.splice(0, valor_total);

    }else if (caracteresEspeciales.length == 0) {
        count+= 1;
        encriptacion(true)
    }
}         
// funciones para encriptar texto y quitar la encripcion 
function encriptacion(confirmacion) {
    if (confirmacion === true && count === arregloDePalabras.length){
        mensajeEncriptado =  arregloDePalabras; 
        for (let i = 0, len = mensajeEncriptado.length; i < len; i++) {
            texto += mensajeEncriptado[i] + " ";
            }
            if (bTn == "agregarE"){
                texto = texto.replaceAll("e","enter");
                texto = texto.replaceAll("i","imes");  
                texto = texto.replaceAll("a","ai");  
                texto = texto.replaceAll("o","ober"); 
                texto = texto.replaceAll("u","ufat"); 
                asignarTextoElemento('output_texto', `${texto}`);
                count = 0;
                texto = "";  
            }else if (bTn == "removerE") {
                texto = texto.replaceAll("enter","e");
                texto = texto.replaceAll("imes","i"); 
                texto = texto.replaceAll("ai","a");  
                texto = texto.replaceAll("ober","o"); 
                texto = texto.replaceAll("ufat","u"); 
                console.log(texto);
                let cifrado_removido = document.getElementById('output_texto').value = texto;
                count = 0;
                texto = "";
            }
        }
}
//funcion para copiar texto
function copiar_texto_fun() {
    let texto_copiado = document.getElementById('output_texto').textContent;
    texto_copiado.trim();
    navigator.clipboard.writeText(texto_copiado);
}
//funcion para limpiar texto
function limpiar_texto_fun() {
    let borrar = document.getElementById('output_texto').value = ' ';
    borrar = document.getElementById('input_texto').value = ' ';
    let elementoHTML3 = document.getElementById('imagen_aca').style.display = "flex";
    elementoHTML2 = document.getElementById('output_texto').style.display = "none";
}


        