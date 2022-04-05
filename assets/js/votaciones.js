// let nota = Math.random() * 5;

// console.log("Nota obtenida: " + nota);

// if (nota <= 3) {
//     console.log("Pierde la materia");
// } else if (nota <= 4) {
//     console.log("Muy bien");
// } else {
//     console.log("Excelente");
// }

// console.log("------------------");

// let fruta = prompt("ingrese el nombre de la fruta");

//if (fruta == "Manzana") 
//{
//   console.log("La manzana vale $10.000");
//} else if (fruta == "Pera") {
//console.log("La pera vale $15.000")
//} else if (fruta == "Limon") {
//    console.log("El limon vale $6.000")
//}
//else if (fruta == "Mango") {
//   console.log("El mango vale $8.000")
//}
//else {
//   console.log("Se nos agotó la fruta");
//}

//switch (fruta) 
//case "Manzana":
//      alert("La manzana vale $10.000");
//        break;
//    
//   case "Pera":
//        alert("La pera vale $15.000");
//       break;
//    
//   case "Limón":
//       alert("El limón vale $6.000");
//       break;
//   
//   case "Mango":
//       alert("El Mango vale $8.000");
//       break;
//  default:
//      alert("Se nos agotó la fruta");    
//
//}

//Contar e informar cuantos proyectos se aprobaron 
//2.Al proyecto se le  aprueba el dinero completo.

// let dineroEnCaja = Number(prompt("Ingrese el monto de dinero: "));

// let numAprobados = 0

// while(dineroEnCaja > 0)
// {
//     let presupuestoProyecto = Number(prompt("Ingrese el monto del Proyecto: "));
//     if (presupuestoProyecto > dineroEnCaja)
//     {
//         alert("No se ha aprobado el presupuesto.");
//     } else {
//         dineroEnCaja -= presupuestoProyecto;
//         alert("Se asignaron recursos para su Proyecto");
//         numAprobados++;
//     }

// }
// alert("Se han acabado los recursos. se aprobaron" +

let candidato = Math.random() * 30;

let candidato1 = 0;
let candidato2 = 0;
let candidato3= 0;
let candidato4= 0;

let voto;

for (let i = 1; i < 30; i++);


voto = prompt("Ingrese el número del candidato de su preferencia: \n1. Mateo.\n2. Marcos.\n3. Lucas. \n4. Juan.");

switch (voto) {
    case "1":
        candidato1++;
        break;
    case "2":
        candidato2++;
        break;
    case "3":
        candidato3++;
        break;
    case "4":
        candidato4++;
        break;
}

$mensaje = "El vocero del curso es: ";
 
if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4)
{

    $mensaje += " Mateo";
}
else if (candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > candidato4)
{

    $mensaje += " Marcos";
}
else if (candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > candidato4)
{

    $mensaje += "Lucas";
}
else if (candidato4 > candidato1 && candidato4 > candidato2 && candidato4 > candidato3)
{

    $mensaje += "Juan";
}
else
{
    $mensaje = "No hay ganador";
}

alert($mensaje);


let numVotos = Number(prompt("Ingrese el numero de votos "));

let numCandidatos = 0



//hacer un input donde tomemos el voto al oprimir hara el conteo

//cuando llege 29 votos no recibe mas. aparece el mensaje diciendo quien fue el ganador

//si pone un numero de un candidato que no exista, no debe contar votos pero debe permitir que ingrese una votacion valida                           