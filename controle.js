function ligar(){
    document.getElementById('lamp').src = "onn.jpg"
}

function desligar(){
    document.getElementById('lamp').src = "off.jpg"
}

function piscar(){
    let intervalo = 0;
    let contador = 0;



while(contador < 10){
    intervalo += 1.5
    setTimeout("document.getElementById('lamp').src = 'onn.jpg';",intervalo)
    intervalo += 1.5
    setTimeout("document.getElementById('lamp').src = 'off.jpg';", intervalo)
    contador++;
}
}