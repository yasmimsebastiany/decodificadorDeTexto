const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function temAcento(string) {
    const acento = /[\u00C0-\u00FF]/;
    return acento.test(string);
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    if (temAcento(textoEncriptado)) {
        alert("Não pode ter acento!");
        textArea.value = "";
    } else {
        mensagem.style.backgroundImage = "none";
        mensagem.value = textoEncriptado;
        textArea.value = "";
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    if (temAcento(textoDesencriptado)) {
        alert("Não pode ter acento!");
        textArea.value = "";
    } else {
        mensagem.style.backgroundImage = "none";
        mensagem.value = textoDesencriptado;
        textArea.value = "";
    }
}

function copiarMensagem() {
    if (mensagem && mensagem.value) {
        navigator.clipboard.writeText(mensagem.value)
            .then(() => {
                alert("Texto copiado para a área de transferência!");
            })
            .catch(err => {
                console.error("Erro ao copiar texto: ", err);
            });
    } else {
        alert("Nada para copiar!");
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}