    import {cantidadDeCaracteres} from "../servicios/serviciosPunto3.js";

 let ciudad = prompt("Ingresa el nombre de una ciudad:");
    let pais = prompt("Ingresa el nombre de un país:");

    let resultado = ciudad + ", " + pais;
    alert("Resultado: " + resultado);

    alert("La ciudad tiene " + ciudad.length + " caracteres.");
    alert("El país tiene " + pais.length + " caracteres.");
    cantidadDeCaracteres(ciudad, pais);


