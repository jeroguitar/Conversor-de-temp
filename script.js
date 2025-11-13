"use strict";
//Definir los controles
const txtGrados = document.getElementById("txtGrados");
const btnConvertir = document.getElementById("btnConvertir");
const spanResultados = document.getElementById("spanResultados");

btnConvertir.addEventListener("click",()=>{
  let mensaje;
  let celsius = txtGrados.value;
  if (celsius === "") {
    mensaje = "No ingresaste un valor";
  } else {
    celsius = Number(txtGrados.value);
    let fahrenheit = celsius * 1.8 + 32;
    mensaje = `${fahrenheit.toFixed(2)} °F`;
  }


  txtGrados.textContent = "";
  spanResultados.textContent = mensaje;
});