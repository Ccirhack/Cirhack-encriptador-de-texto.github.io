const letraA = 'ai';
const letraE = 'enter';
const letraI = 'imes';
const letraO = 'ober';
const letraU = 'ufat';

let textoEncriptado = document.getElementById('mostrador-de-texto');
let muniecoImagen = document.getElementById('munieco-imagen');
let mensajeNoEncontrado = document.getElementById('aviso-mensaje-no-encontrado');
let mensajeIngresarTexto = document.getElementById('aviso-ingresar-texto');
let botonCopiar = document.getElementById('botonCopiar');

function encriptarTexto(){
    muniecoImagen.classList.add('oculto');
    mensajeNoEncontrado.classList.add('oculto');
    mensajeIngresarTexto.classList.add('oculto');
    botonCopiar.style.display = 'block';
    let textoIngresado = document.getElementById('textoUsuario').value;
    let nuevoTextoEncriptado = '';
    for (let i = 0; i < textoIngresado.length; i++){
        if (textoIngresado[i] == 'a'){
            nuevoTextoEncriptado = nuevoTextoEncriptado + letraA;
        }
        else if (textoIngresado[i] == 'e'){
            nuevoTextoEncriptado = nuevoTextoEncriptado + letraE;
        }
        else if (textoIngresado[i] == 'i'){
            nuevoTextoEncriptado = nuevoTextoEncriptado + letraI;
        }
        else if (textoIngresado[i] == 'o'){
            nuevoTextoEncriptado = nuevoTextoEncriptado + letraO;
        }
        else if (textoIngresado[i] == 'u'){
            nuevoTextoEncriptado = nuevoTextoEncriptado + letraU;
        }else{
            nuevoTextoEncriptado = nuevoTextoEncriptado + textoIngresado[i];
        }
    }
    textoEncriptado.textContent = nuevoTextoEncriptado;
}

function desencriptarTexto(){
    muniecoImagen.classList.add('oculto');
    mensajeNoEncontrado.classList.add('oculto');
    mensajeIngresarTexto.classList.add('oculto');
    //En el style.cc se cambia el display:none; a display block para mostrar el botón
    botonCopiar.style.display = 'block';
    let textoIngresado = document.getElementById('textoUsuario').value;
    //Reemplazas cada variable con una vocal
    for (let i = 0; i < textoIngresado.length; i++){
        if (textoIngresado.includes(letraA) || textoIngresado.includes(letraE) || textoIngresado.includes(letraI) || textoIngresado.includes(letraO) || textoIngresado.includes(letraU)){
            textoIngresado = textoIngresado.replace(letraA, 'a');
            textoIngresado = textoIngresado.replace(letraE, 'e');
            textoIngresado = textoIngresado.replace(letraI, 'i');
            textoIngresado = textoIngresado.replace(letraO, 'o');
            textoIngresado = textoIngresado.replace(letraU, 'u');
        }
    }
    textoEncriptado.textContent = textoIngresado;
}

function copiarTexto() {
    // Verificar si hay texto en el párrafo
    if (textoEncriptado.textContent.trim() !== '') {
        // Crear un rango de selección
        const range = document.createRange();
        // Seleccionar todo el contenido del párrafo
        range.selectNode(textoEncriptado);
        // Seleccionar el rango creado
        window.getSelection().removeAllRanges(); // Limpiar selección previa
        window.getSelection().addRange(range);
        // Copiar el texto seleccionado
        document.execCommand('copy');
        // Deseleccionar el texto después de copiarlo
        window.getSelection().removeAllRanges();
    }
}