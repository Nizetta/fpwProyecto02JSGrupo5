// export const mostrarLista=(listaDeTareas)=>{
//     for(const i of listaDeTareas){
//         const li =document.createElement("li");
//         li.textContent=i;
//         lista.append(li);
//     }
// };

export const calcularPorcentaje=(v1,v2)=>{
    const porcentaje=(v2/v1)*100;
    rendimientoEstudiante(porcentaje);
};

export const rendimientoEstudiante=(porcentaje)=>{
    const li=document.createElement("li");
    
    if(porcentaje>=90){
        li.textContent="Excelente";
    }else if(porcentaje>=70 && porcentaje<=89.99){
        li.textContent="Muy bueno";
    }else if(porcentaje>=50 && porcentaje<=69.99){
        li.textContent="Aprobado";
    }else{
        li.textContent="Desaprobado";
    }
   
    document.querySelector("#resultados").append(li);
}