let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;

console.log(`Secreto: ${numeroSecreto}`);
    
function asignarTextoElemento(elemento, texto){
    let parrafo = document.querySelector(elemento);
    parrafo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
 
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto > numeroUsuario){
            asignarTextoElemento("p",'El número secreto es mayor.');
        }else   {
            asignarTextoElemento("p",'El número secreto es menor.');
        }
        intentos++;
        limpiarCaja();   
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
    
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    
    if(listaNumerosGenerados.length == numeroMaximo){

        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{

        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        }else{
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del número secreto!" );
    asignarTextoElemento('p', "Indica un número del 1 al 10.")
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Mostrar el mensaje de inicio
    //Generar el número aleatorio
    //Deshabilitar el boton de inicio
    condicionesIniciales();    
    //Iniciar el contado de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();