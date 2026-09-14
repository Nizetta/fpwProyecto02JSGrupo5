import {calcularPorcentaje,rendimientoEstudiante} from "../services/serviciosEjer5.js";

const listaDeTareas=[];

const formulario=document.querySelector("#formulario");
const cantPreguntas=document.querySelector("#cantPreguntas");
const cantRespuestas=document.querySelector("#cantRespuestas");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const valor1=parseInt(cantPreguntas.value);
    const valor2=parseInt(cantRespuestas.value);
    formulario.reset();
    calcularPorcentaje(valor1,valor2);
});
