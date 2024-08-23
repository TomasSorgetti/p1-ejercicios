//! Consigna
//! Calcular e informar un sueldo sabiendo que:
//! La categoría define el sueldo básico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000).
//! La subcategoría define el multiplicador (A: x1.5, B: x2, C: x2.5).
//! Ambos datos son ingresados por el usuario.
//! Además, informar dentro de qué rango está el sueldo:
//! Si está en el rango ‘inicial’: entre u$s 1500 a u$s 3000, inclusive.
//! Si está en el rango ‘intermedio’: entre u$s 3001 y u$s 4000, inclusive.
//! Si está en el rango ‘avanzado’: si supera los u$s 4000.

//* Categoria puede ser 1, 2 o 3
//* La subcategoria puede A, B o C

const categoria = parseInt(
  prompt("Ingresá 1 para usd$ 1000, 2 para usd$ 1500, o 3 para usd$ 2000")
);
const subcategoria = prompt(
  "ingresá A para multiplicar x1.5, B para x2 o C para x2.5"
).toUpperCase();

let sueldo = 1000;

categoria === 3
  ? (sueldo = 2000)
  : categoria === 2
  ? (sueldo = 1500)
  : categoria === 1
  ? (sueldo = 1000)
  : console.log("Seleccioná una opcion válida");

switch (subcategoria) {
  case "a":
    sueldo *= 1.5;
    break;
  case "b":
    sueldo *= 2;
    break;
  case "c":
    sueldo *= 2.5;
    break;

  default:
    sueldo = 0;
    break;
}

if (sueldo >= 1500 || sueldo <= 3000) {
  console.log(`El sueldo es de rango incial`);
} else if (sueldo > 3000 && sueldo <= 4000) {
  console.log(`El sueldo es de rango intermedio`);
} else if (sueldo > 4000) {
  console.log(`El sueldo es de rango avanzado`);
}
