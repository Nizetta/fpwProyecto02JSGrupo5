export function validarCadena(cadena) {
    // la cadena no puede estar vacia
    if (cadena.length === 0) {
        return false;
    }
    //cantidad de caracteres impares
    if (cadena.length % 2 === 0) {
        return false;
    }
    // hacemos un recorrido de los caracteres
    for (let i = 0; i < cadena.length; i++) {
        // posiciones pares numeros del 0 al 5
        if (i % 2 === 0) {
            if (cadena[i] < "0" || cadena[i] > 5) {
                return false;
            }
        } else {
            //posiciones impares deber tener el ?
            if (cadena[i] !== "?") {
                return false;
            }
        }
    }

    // si pasó todas las comprobaciones
    return true;
}


export function reemplazarSigno(cadena) {
    // Copia de caracteres para modificarlos
    let resultado = cadena.split("");

    // los signo ? estan en posiciones 1, 3, 5...
    for (let i = 1; i < cadena.length; i += 2) {

        // se usa la cadena inicial para las sumas
        let anterior = Number(cadena[i - 1]);
        let siguiente = Number(cadena[i + 1]);

        let suma = anterior + siguiente;

        if (suma === 10) {
            // ? se reemplaza por 0
            resultado[i] = "0";

            // se suma 1 (por la decena) al numero anterior
            resultado[i - 1] =
                String(Number(resultado[i - 1]) + 1);

        } else {
            // con una suma de 0 a 9 solo va el resultado
            resultado[i] = String(suma);

        }
    }
    // se convierte el arreglo en una cadena de texto
    return resultado.join("");

}

