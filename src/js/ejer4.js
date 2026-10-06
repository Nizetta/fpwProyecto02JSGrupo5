/*Solicitar al usuario que ingrese una cadena de N caracteres impares. Cada uno de estos N caracteres es o bien un dígito entre 0 y 5 inclusive, o bien un signo de pregunta ?, en forma intercalada y comenzando con un dígito. Debe escribir una función que retorne una nueva cadena, que representa el número obtenido de reemplazar cada signo de pregunta, de la cadena original, por un dígito que sea la suma de los dígitos adyacentes a ese signo de pregunta en la cadena original. */
import {
    validarCadena,
    reemplazarSigno
} from "../services/serviciosEjer4.js"


let cadena = prompt(
    "Ingrese una cadena impar de números del 0 al 5, separados por ?:"
);

if (cadena === null) {

    console.log("Operación cancelada por el usuario.");
    alert("Operación cancelada por el usuario.");

} else if (!validarCadena(cadena)) {

    console.log(
        "Error: ingrese una cadena impar que comience con un dígito del 0 al 5 y alterne números y signos ?."
    );
    alert(
        "Error: ingrese una cadena impar que comience con un dígito del 0 al 5 y alterne números y signos ?."
    );

} else {

    let resultado = reemplazarSigno(cadena);

    console.log("Cadena original:", cadena);
    console.log("Cadena resultante:", resultado);

    alert(
        "Cadena original: " + cadena + "\n" +
        "Cadena resultante: " + resultado
    );

}
