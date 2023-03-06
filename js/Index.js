const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");


function encriptar(stringEncriptado) {
let matrizCodigo=[["e", "enter"],["i", "imes"],["a", "ai"],["o", "oben"],["u", "ufat"]];
stringEncriptado=stringEncriptado.toLowerCase();

for(let i=0; i< matrizCodigo.length; i++){
	if (stringEncriptado.includes(matrizCodigo[i][0])) {
		stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

	}

}
return stringEncriptado;
}



function desencriptar(stringDesencriptado) {
let matrizCodigo=[["e", "enter"],["i", "imes"],["a", "ai"],["o", "oben"],["u", "ufat"]];
stringDesencriptado=stringDesencriptado.toLowerCase();

for(let i=0; i< matrizCodigo.length; i++){
	if (stringDesencriptado.includes(matrizCodigo[i][1])) {
		stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

	}

}
return stringDesencriptado;
}

function btnencriptar() {
const textoEncriptado=encriptar(textArea.value);
mensaje.value=textoEncriptado;
textArea.value="";
mensaje.style.backgroundImage='none'; 
}



function btnValidar() {    
    if(textArea.value.match(/^[ a-z]*$/)) {
        btnencriptar();
    } else {
        alert("Solo se permiten letras minusculas");
    }
}


function btndesencriptar() {
const textoEncriptado=desencriptar(textArea.value);
mensaje.value=textoEncriptado;
textArea.value="";
}
function copiar(){
	
mensaje.select();
document.execCommand('copy');

}
