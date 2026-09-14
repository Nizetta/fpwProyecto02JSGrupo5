function CiudadYPais() {
    let ciudad = prompt("Ingresa el nombre de una ciudad:");
    let pais = prompt("Ingresa el nombre de un país:");

    let resultado = ciudad + ", " + pais;
    alert("Resultado: " + resultado);

    alert("La ciudad tiene " + ciudad.length + " caracteres.");
    alert("El país tiene " + pais.length + " caracteres.");

    if(ciudad.length > pais.length){
       alert("La ciudad es más larga que el país.");
    } else if (ciudad.length < pais.length) {
        alert("El país es más largo que la ciudad.");
    } else {
        alert("Ambas tienen la misma cantidad de caracteres.");
    }
}


