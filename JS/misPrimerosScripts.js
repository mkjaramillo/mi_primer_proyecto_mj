function ocultarMostrarImagen() {
    //el display: none, block
    var valorDisplay = document.getElementById('idImagen').style.display;
    if (valorDisplay == 'none') {
        valorDisplay = 'block';
    } else {
        valorDisplay = 'none';
    }
    document.getElementById('idImagen').style.display = valorDisplay;
}
function enciende() {
    var valorSRC = document.getElementById('idImagenFoco').src;
    console.log(valorSRC);
    document.getElementById('idImagenFoco').src = "../img/encendido.png"

}
function apaga() {
    var valorSRC = document.getElementById('idImagenFoco').src;
    console.log(valorSRC);
    document.getElementById('idImagenFoco').src = "../img/apagado.png"

}
function enciendeApaga() {
    var valorSRC = document.getElementById('idImagenFoco').src;
    if (valorSRC.match('../img/apagado.png')) {
        valorSRC = "../img/encendido.png";
        console.log(valorSRC);
    } else {
        valorSRC = '../img/apagado.png';
        console.log(valorSRC);
    }
    document.getElementById('idImagenFoco').src = valorSRC;

}
function cambiarTextos() {
    const elementos = document.getElementsByClassName("nuevo");
    /* elementos[0].innerHTML = "1mer texto";
     elementos[1].innerHTML = "2do texto";
     elementos[2].innerHTML = "3ro texto";
     for(let valor in elementos){
         console.log(valor)
         elementos[valor].innerHTML="A";
 
     }*/
    for (let valor of elementos) {
        console.log(valor)
        valor.innerHTML = "A";

    }



}
function cambiarTextosElementos() {
    const elementos = document.getElementsByTagName("h1")
    elementos[0].innerHTML = "A";
    elementos[1].innerHTML = "B";

}
/*
function mOver(){
    var elemento=document.getElementById("div1");
    elemento.innerHTML="nuevo texto";
   elemento.style.backgroundColor="red";
}
function mOut(){
    var elemento=document.getElementById("div1");
    elemento.innerHTML="texto nuevo ";
   elemento.style.backgroundColor="yellow";
}*/
function mOver(elemen) {

    elemen.innerHTML = "nuevo texto";
    elemen.style.backgroundColor = "red";
}
function mOut(elemen) {

    elemen.innerHTML = "texto nuevo ";
    elemen.style.backgroundColor = "yellow";
}
function imprimirPersona() {

    //declaraciones de arreglos
    //desestructuracion de un arreglo ya declarado
    const colores = ['rojo', 'amarillo', 'azul'];
    const [c1, c2, c3] = colores
    console.log(c1);
    console.log(c2);
    console.log(c3);
    //desestructuracion de arreglo nuevo
    const [p1, p2, p3] = ['red', 'yellow', 'blue'];
    console.log(p1);
    console.log(p2);
    console.log(p3);

    //declarar objetos
    const persona = { nombre: "Milena", apellido: "Jaramillo", edad: 32 };
    console.log(persona);
    //desustructuracion de objetos
    const {nombre,apellido,edad} = persona;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);

    const {n,apell,ed} = {n: "Milena", apell: "Jaramillo", ed: 32};
    console.log(n);
    console.log(apell);
    console.log(ed);
    //objetos compuestos
    const persona2 = { nombre: "Milena", apellido: "Jaramillo", edad: 32,direccion:{calle:"america",numero:"3-23"} };
    console.log(persona2);


    
}
