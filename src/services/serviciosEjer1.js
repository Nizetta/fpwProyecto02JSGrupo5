export function compararLetras(letra1, letra2) {
    if (letra1 === letra2) {
        return "Las dos letras están en la misma posición.";
    } else if (letra1 < letra2) {
        return "La primera letra está antes que la segunda.";
    } else {
        return "La primera letra está después que la segunda.";
    }
}