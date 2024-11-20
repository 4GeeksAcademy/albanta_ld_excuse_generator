/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  const obtenerElementoAleatorio = (array) => {
    const posicionAleatoria = Math.floor(Math.random() * array.length);
    return array[posicionAleatoria];
  };

  const obtenerQuienAleatorio = () => {
    const tiposDeQuien = ["The Dog", "My Grandma", "Bryan"];
    return obtenerElementoAleatorio(tiposDeQuien);
  };

  const obtenerAccionAleatoria = () => {
    const tiposDeAccion = ["ate", "crushed", "broke"];
    return obtenerElementoAleatorio(tiposDeAccion);
  };

  const obtenerQueAleatorio = () => {
    const tiposDeQue = ["my homework", "my phone", "the car"];
    return obtenerElementoAleatorio(tiposDeQue);
  };

  const obtenerCuandoAleatorio = () => {
    const tiposDeCuando = [
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
    return obtenerElementoAleatorio(tiposDeCuando);
  };

  const generadorExcusas = (quien, accion, que, cuando) => {
    return `${quien} ${accion} ${que} ${cuando}`;
  };

  const generadorDeExcusas = () => {
    const quien = obtenerQuienAleatorio();
    const accion = obtenerAccionAleatoria();
    const que = obtenerQueAleatorio();
    const cuando = obtenerCuandoAleatorio();
    return generadorExcusas(quien, accion, que, cuando);
  };

  
  document.getElementById("excuse").innerHTML = generadorDeExcusas();
  console.log("Hello Rigo from the console");
};