"use strict";
//Definir los controles
const txtGrados = document.getElementById("txtGrados");
const btnConvertir = document.getElementById("btnConvertir");
const spanResultados = document.getElementById("spanResultados");

btnConvertir.addEventListener("click",()=>{
  let celsius = Number (txtGrados.value);

  let mensaje = (celsius === "") ? "Ingresa un valor" : `${celsius * 1.8 + 32} °F`;
  spanResultados.textContent =mensaje;
  txtGrados.textContent= "";
}); 