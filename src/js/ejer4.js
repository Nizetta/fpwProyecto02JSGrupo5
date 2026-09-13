/*Solicitar al usuario que ingrese una cadena de N caracteres impares. Cada uno de estos N caracteres es o bien un dígito entre 0 y 5 inclusive, o bien un signo de pregunta ?, en forma intercalada y comenzando con un dígito. Debe escribir una función que retorne una nueva cadena, que representa el número obtenido de reemplazar cada signo de pregunta, de la cadena original, por un dígito que sea la suma de los dígitos adyacentes a ese signo de pregunta en la cadena original. */

let cadena = prompt("Ingrese una cadena de N caracteres impares (dígitos entre 0 y 5 y signos de pregunta ?): ");

let nuevaCadena = reemplazarSigno(cadena);

console.log("Cadena original: " + cadena);
console.log("Cadena modificada: " + nuevaCadena);
