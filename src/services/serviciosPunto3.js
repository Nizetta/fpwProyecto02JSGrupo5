export const cantidadDeCaracteres =(ciudad, pais)=>{
if(ciudad.length > pais.length){
       alert("La ciudad es más larga que el país.");
    } else if (ciudad.length < pais.length) {
        alert("El país es más largo que la ciudad.");
    } else {
        alert("Ambas tienen la misma cantidad de caracteres.");
    }
}
