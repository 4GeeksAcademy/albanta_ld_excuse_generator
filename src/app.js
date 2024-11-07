/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // writte yout code here
  function obtenerQuienAleatorio() {
    const tiposDeQuien = new Array("The Dog", "My Grandma", "Bryan");
    let rnd = Math.random();
    const posicionDeQuienRandom = Math.floor(rnd * tiposDeQuien.length);
    return tiposDeQuien[posicionDeQuienRandom];
  }

  function obtenerAccionAleatorio() {
    const tiposDeAccion = new Array("ate", "crushed", "broke");
    let rnd = Math.random();
    const posicionDeAccionRandom = Math.floor(rnd * tiposDeAccion.length);
    return tiposDeAccion[posicionDeAccionRandom];
  }

  function obtenerQueAleatorio() {
    const tiposDeQue = new Array("my homework", "my phone", "the car");
    let rnd = Math.random();
    const posicionDeQueRandom = Math.floor(rnd * tiposDeQue.length);
    return tiposDeQue[posicionDeQueRandom];
  }

  function obtenerCuandoAleatorio() {
    const tiposDeCuando = new Array(
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    );
    let rnd = Math.random();
    const posicionDeCuandoRandom = Math.floor(rnd * tiposDeCuando.length);
    return tiposDeCuando[posicionDeCuandoRandom];
  }

  function generadorExcusas(quien, accion, que, cuando) {
    return `${quien} ${accion} ${que} ${cuando}`;
  }

  function generadorDeExcusas() {
    const quien = obtenerQuienAleatorio();
    const accion = obtenerAccionAleatorio();
    const que = obtenerQueAleatorio();
    const cuando = obtenerCuandoAleatorio();
    const excusa = generadorExcusas(quien, accion, que, cuando);
    return excusa;
  }

  document.getElementById("excuse").innerHTML = generadorDeExcusas();
  console.log("Hello Rigo from the console");
};
