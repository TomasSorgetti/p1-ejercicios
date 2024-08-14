const maxNumber = parseInt(prompt("Ingresa un numero máximo"));
const minNumber = parseInt(prompt("Ingresa un numero mínimo"));

const num = parseInt(prompt("Ingresa un numero"));

if (num >= minNumber && num <= maxNumber) {
  console.log("El numero esta en rango");
  if (num % 2 === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
} else {
  console.log("El numero no esta en rango");
}
