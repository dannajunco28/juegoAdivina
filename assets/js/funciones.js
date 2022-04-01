const numClicDOM = document.getElementById("numClic");
const btnReiniciar = document.getElementById("btnReiniciar");

let numeroClic = 0;

function contadorDeClic()
{
    numeroClic += 1;
    numClicDOM.textContent = numeroClic;
}

function reiniciar()
{
numClicDOM.textContent = 0;
}

btnReiniciar.addEventListener('click', reiniciar);


