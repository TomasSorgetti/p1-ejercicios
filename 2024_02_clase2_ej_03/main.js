//! Consigna
//! Ingresar y mostrar las notas de una comision, calcular e informar:

//! El promedio de los alumnos desaprobados (notas < 4)
//! El promedio de los alumnos aprobados (notas >= 4)
//! El promedio de los alumnos promocionados (notas >= 7, tambien cuentan como aprobados)
//! La minima y maxima nota ingresada
//! Se desconoce la cantidad de notas

let desaprobados = [];
let aprobados = [];
let promocionados = [];

let minima = 10;
let maxima = 1;

let condition;

do {
  let nota = parseInt(prompt("Ingresa una nota"));

  //* Si la nota no es válida arroja error
  if (!nota || nota > 10 || nota <= 0)
    console.error("Ingresá una nota válida loco");
  //* Aprobados, Desaprobados y Promedio
  if (nota < 4) {
    desaprobados.push(nota);
  } else if (nota >= 4 && nota <= 10) {
    aprobados.push(nota);
    if (nota >= 7) {
      promocionados.push(nota);
    }
  }
  //* Minima y Máxima
  if (nota < minima) {
    minima = nota;
  }
  if (nota > maxima) {
    maxima = nota;
  }

  condition = confirm("Querés agregar otra nota?");
} while (condition);

const getPromedio = (notas) => {
  let total = 0;
  notas.forEach((nota) => {
    total += nota;
  });
  return total / notas.length;
};

//* Alertas de las respuestas
if (desaprobados.length || aprobados.length) {
  alert(`Promedio desaprobados: ${getPromedio(desaprobados)}`);
  alert(`Promedio aprobados: ${getPromedio(aprobados)}`);
  alert(`Promedio promocionados: ${getPromedio(promocionados)}`);
  alert(`La nota mínima es: ${minima}`);
  alert(`La nota máxima es: ${maxima}`);
}
