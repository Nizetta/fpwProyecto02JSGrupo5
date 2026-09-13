function reemplazarSigno(cadena) {
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "?") {
            let anterior = Number(cadena[i - 1]);
            let siguiente = Number(cadena[i + 1]);
            let suma = anterior + siguiente;
            nuevaCadena = nuevaCadena + suma;
        }
        else {
            nuevaCadena = nuevaCadena + cadena[i];
        }
    }
    return nuevaCadena;
}

