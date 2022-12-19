"use strict";
/**
 * crear un objeto fechas
 * el objeto va tener 3 artibutos fecha1 fecha2
 * crear un metodo par calcular (los dias entre la fecha1 y 
Daniel Marquez
Imagen de perfil de Daniel Marquez.fecha2)
 * otro artibuto va signar cuntos son fecha1
 **/
// let fechas = {
//   fecha1: new Date("12/11/2022"),
//   fecha2: new Date(),
//   calcular_dia: function () {
//     const diffTime = Math.abs(this.fecha1 - this.fecha2);
//     const diffDays = Math.ceil(diffTime / (24 * 60 * 60 * 1000));
//     return diffDays;
//   },
// };

// console.log(fechas.calcular_dia());

//////////////////////////////
// var fechaInicio = new Date("2022-12-11").getTime();
// var fechaFin = new Date("2022-12-17").getTime();

// var diff = fechaFin - fechaInicio;

// console.log(diff / (1000 * 60 * 60 * 24));
/////////////////////////////
/**
 * un funcion va recibir dos array
 * una hacer un numero otro a un reglo
 * pop
 * unshift
 * indexof
 */

// let arrays = [1, 2, 4, "farzin"];

// arrays.forEach(function (elemento, indice) {
//   console.log(elemento, indice);
// });

// let nuevoLongitud = arrays.push(12, "Enovel", 77);
// console.log(nuevoLongitud);

// let eliminarUltimo = arrays.pop();
// console.log(eliminarUltimo);

// let buscar7 = arrays.indexOf(7);
// console.log(buscar7);

///////////////////

// const array = (numero, arreglo) => {
//   if (numero === 1) arreglo.pop();
//   if (numero === 2) arreglo.push(numero);
//   if (numero === 3) return arreglo.indexOf(numero);
//   return arreglo;
// };

// const arr = [12, 1, 3, 45, 6, 2];
// console.log(array(1, arr));

////////////////////////////////////////////
// let DOB = prompt("ingresa tu fecha ");
// let milliseconds1992 = Date.parse(DOB);
// let millisecondsNow2022 = Date.now();
// let ageMilliseconds = millisecondsNow2022 - milliseconds1992;

// Calculate milliseconds in a year

// const milliseconds = ageMilliseconds;
// const second = 1000;
// const minute = second * 3600;
// const hour = minute;
// const day = hour * 24;
// const month = day * 30;
// const year = day * 365;

// // let  age =
// let years = Math.round(milliseconds / year);
// let months = years * 12;
// let days = years * 365;
// let hours = Math.round(milliseconds / hour);
// let seconds = Math.round(milliseconds / second);
// function prinResult() {
//   let massege =
//     "Age in Years : " +
//     years +
//     "</br>Age in Months : " +
//     months +
//     "</br>Age in Days : " +
//     days +
//     "</br>Age in Hours : " +
//     hours +
//     "</br>Age in Seconds : " +
//     seconds +
//     "</br>Age in Milliseconds : " +
//     milliseconds;
//   document.getElementById("placeholder").innerHTML = massege;
// }
// window.onload = prinResult;

////////////////////////////
// function nameCumplet(name, lastName) {
//   return name + " " + lastName;
// }
// function saludo(name, lastName, username) {
//   const nameFull = nameCumplet(name, lastName);

//   console.log(
//     "Mi numbre es " +
//       nameFull +
//       ", pero prefielo que me digan " +
//       username +
//       "."
//   );
// }

// console.log(saludo("Farzin", "Jimenez", "apachi"));
/////////////////////////////////////

// for (let i = 0; i < 8; i++) {
//   console.log("es mi ciclo for:" + i);
// }

// let i = 18;
// while (i >= 7) {
//   console.log("es mi valor con while:" + i);
//   i--;
// }

// for (let i = 0; i < 30; i++) {
//   console.log("es mi valor:" + i);
// }

// const tipoSuscrepciones = {
//   free: "solo eres aprendizzaje",
//   epert: "solo tomas curso",
//   experto: "solo estudias",
// };

// function conseguirTipoSuscrepciones(suscrepciones) {
//   if (tipoSuscrepciones[suscrepciones]) {
//     console.log(tipoSuscrepciones[suscrepciones]);
//     return;
//   }
//   console.warn("este tipo no esta suscripcion");
// }
// conseguirTipoSuscrepciones("fdsafds");

//////////////////////////
/*
1 definir dos fechas 
2 guardar cada una de esas fechas en un arreglo
3 validar cual es la fecha mayor (la mas actual)
4 imprimir en consola la fecha mayor (la mas actual)
5 Eliminar la fecha menor del arreglo e imprimir en consola "LA FECHA SE HA ELIMINADO"*/

// let fecha1 = Date.now(12 / 11 / 2022);
// let fecha2 = Date.now(17 / 11 / 2022);

// const object1 = {
//   fecha1: Date.now(12 / 11 / 2022),
//   fecha2: Date.now(17 / 11 / 2022),
// };

// console.log(Object.values(object1));

// if (fecha1 > fecha2){
//   console.log('fecha mayor es:');
// }if (fecha1 < fecha2){
//   console.log('fecha mayor es:')
// }

////////////////////////////
// let obj2 = {
//   fecha1: new Date('12/12/2022').toISOString(),
//   fecha2: new Date('12/17/2022').toISOString(),
//   fecha3: new Date('11/15/2022').toISOString()
// }

// let datesArr = Object.values(obj2)

// function compareDates(arr) {
//   arr.sort((a, b) => a > b ? -1 : 1)
//   console.log('La fecha mayor es ', arr[0].split('T')[0])
//   arr.splice(arr.length - 1, 1)
//   return arr
// }

// console.log(compareDates(datesArr))

// const h1 = document.querySelector("h1");
// // const p = document.querySelector("p");
// // const pid = document.getElementById("pid");
// // const parrafito = document.getElementsByClassName("parrafito");
// const input = document.querySelector("input");
// console.log(input.value);
// console.log({
//   h1,
//   p,
//   pid,
//   parrafito,
//   input,
// });

// h1.innerHTML = "pattito <br>  feo";
// // h1.innerText = "pattito <br>  feo";
// // h1.getAttribute("pantalla");
// console.log(h1.getAttribute("class"));
// // h1.setAttribute("class", "azul");

// h1.classList.add("rojo");
// h1.classList.remove("verde");

// input.value = "147";

// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg"
// );
// console.log(img);
// pid.append(img);
const h1 = document.querySelector("h1");
const calcolo1 = document.querySelector("#calculo1");
const calcolo2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const Result = document.querySelector("#result");
const form = document.querySelector("#form");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  //   console.log({ event });
  event.preventDefault();
  const sumaRasultado = calcolo1.value + calcolo2.value;
  Result.innerText = "Resultado: " + sumaRasultado;
}
