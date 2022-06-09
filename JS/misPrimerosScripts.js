function ocultarMostrarImagen(){
    //el display: none, block
    var valorDisplay=document.getElementById('idImagen').style.display;
    if(valorDisplay=='none'){
        valorDisplay='block';
    }else{
        valorDisplay='none';
    }
document.getElementById('idImagen').style.display=valorDisplay;
}
function enciende(){
    var valorSRC=document.getElementById('idImagenFoco').src;
    console.log(valorSRC);
    document.getElementById('idImagenFoco').src="../img/encendido.png"

}
function apaga(){
    var valorSRC=document.getElementById('idImagenFoco').src;
    console.log(valorSRC);
    document.getElementById('idImagenFoco').src="../img/apagado.png"

}
function enciendeApaga(){
    var valorSRC=document.getElementById('idImagenFoco').src;
    if(valorSRC.match('../img/apagado.png')){
        valorSRC="../img/encendido.png";
        console.log(valorSRC);
    }else{
        valorSRC='../img/apagado.png';
        console.log(valorSRC);
    }
    document.getElementById('idImagenFoco').src=valorSRC;
    
}

