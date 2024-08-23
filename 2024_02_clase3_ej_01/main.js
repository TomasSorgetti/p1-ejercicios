//! Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110).
//! Calcule e informe los siguientes datos:
//! - Promedio de edad general.
//! - Promedio de edad de las mujeres.
//! - Promedio de edad de los hombres.
//! - Porcentaje de mujeres menores a 21 años.
//! - Porcentaje de hombres mayores a 21 años.
//! - La mayor edad ingresada de las mujeres.
//! - La menor edad ingresada de los hombres.
//! Los tres valores ingresados deben ser validados según corresponda.

let ciudad, sexo, edad;
let datoValido = true;

//* Validacion de ciudad
do {
  ciudad = prompt("Ingrese la ciudad");

  if (!isNaN(ciudad)) {
    alert("Ingrese texto, no números");
    datoValido = false;
  } else if (ciudad === null) {
    alert("Por favor, complete el campo");
    datoValido = false;
  } else if (ciudad.trim() === "") {
    alert("No dejar el prompt vacío");
    datoValido = false;
  } else {
    datoValido = true;
  }
} while (!datoValido);

//* Validamos sexo
do {
  sexo = prompt("Ingrese el sexo (H, M, X)");
  sexo && sexo.toLowerCase();

  if (!isNaN(sexo)) {
    alert("Ingrese texto, no números");
    datoValido = false;
  } else if (sexo === null) {
    alert("Por favor, complete el campo");
    datoValido = false;
  } else if (sexo.trim() === "") {
    alert("No dejar el prompt vacío");
    datoValido = false;
  } else if (sexo !== "h" && sexo !== "m" && sexo !== "x") {
    alert("Complete con una opción valida (H, M, X)");
    datoValido = false;
  } else {
    datoValido = true;
  }
} while (datoValido);

//* Validamos edad
do {
  edad = parseInt(prompt("Ingrese la edad"));
  if (isNaN(edad)) {
    alert("Ingrese un número, no texto");
    datoValido = false;
  } else if (edad < 0 || edad > 120) {
    alert("Usted no existe??");
    datoValido = false;
  } else if (edad === null) {
    alert("Por favor, complete el campo");
    datoValido = false;
  } else {
    datoValido = true;
  }
} while (datoValido);
