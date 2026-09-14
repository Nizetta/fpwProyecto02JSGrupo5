import { compararLetras } from "../Services/serviciosEjer1.js";

const letra1 = prompt("Ingrese la primera letra:");
const letra2 = prompt("Ingrese la segunda letra:");

if (
    letra1 !== null &&
    letra2 !== null &&
    letra1.length === 1 &&
    letra2.length === 1
) {
    const resultado = compararLetras(letra1, letra2);
    alert(resultado);
} else {
    alert("Debe ingresar solamente una letra en cada campo.");
}