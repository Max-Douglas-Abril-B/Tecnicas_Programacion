// Este ejercicio cuenta cuántos números pares e impares hay desde 0
// hasta el número ingresado, y luego muestra la cantidad en un mensaje

let numero = parseInt(prompt("Ingresa un numero:"))
let i = 0
let pares = 0
let impares = 0
do {
  if ( i % 2 === 0) {
  pares ++
  } else {
    impares ++
  }
  i++
  } while ( i <= numero)
alert(` El numero ${numero} contiene ${pares} pares y ${impares} impares `)
