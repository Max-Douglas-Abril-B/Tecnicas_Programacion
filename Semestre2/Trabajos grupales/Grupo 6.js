//Componente practico 1
let metros;
let kilometros;
let libras;
let kilogramos;
let minutos;
let horas;
let celsius;
let fahrenheit;
let dolares;
let euros;
let opcion;

function MetrosAKilometros() {
  do{
    metros = parseFloat(prompt("Ingrese los metros: "))
    kilometros = (metros/1000)
    if (metros>= 0) {
        alert(`En ${metros} metros hay ${kilometros} kilometros `)
    } else {
        alert("Entrada no válida.")
    }
    }while(isNaN(metros))//Para validar que sean solo numeros
} 

function LibrasAKilogramos() {
  do{
    libras = parseFloat(prompt("Ingrese la cantidad de libras: "))
    kilogramos = libras * 0.453592
    kilogramos = parseFloat(kilogramos.toFixed(3))//Para no tener muchos decimales
    if (libras>=0) {
        alert(`En ${libras} libras hay ${kilogramos} kilogramos`)
    } else {
        alert("Entrada no válida.")
    }
    }while(isNaN(libras))
}

function MinutosAHoras() {
  do{
    minutos = parseFloat(prompt("Ingrese minutos: "))
    horas = minutos / 60
    horas = parseFloat(horas.toFixed(3))
    if (minutos>=0) {
        alert(`En ${minutos} minutos hay ${horas} horas`)
    } else {
        alert("Entrada no válida.")
    }
    }while(isNaN(minutos))
}

function CelsiusAFahrenheit() {
  do{
    celsius = parseFloat(prompt("Ingrese grados Celsius: "))
    fahrenheit = (celsius * 9/5) + 32
    if (celsius>=0) {
        alert(`En ${celsius}° celsius hay ${fahrenheit}° fahrenheit`)
    } else {
        alert("Entrada no válida.")
    }
    }while(isNaN(celsius))
}

function DolaresAEuros() {
  do {
    dolares = parseFloat(prompt("Ingrese dólares: "))
    euros = dolares * 0.89
    if (dolares>=0) {
        alert(`${dolares}$ equivalen a ${euros}€`)
    } else {
        alert("Entrada no válida.")
    }
    }while(isNaN(dolares))
}

function MostrarMenu() {
do {
  opcion = parseInt(prompt("Menú de Conversión de Unidades:\n1. Convertir metros a kilómetros\n2. Convertir libras a kilogramos\n3. Convertir minutos a horas\n4. Convertir grados Celsius a Fahrenheit\n5. Convertir dólares a euros\n6. Salir"))
    switch (opcion) {
        case 1:
            MetrosAKilometros()
            break
        case 2:
            LibrasAKilogramos()
            break
        case 3:
            MinutosAHoras()
            break
        case 4:
            CelsiusAFahrenheit()
            break
        case 5:
            DolaresAEuros()
            break
        case 6:
            alert("Saliendo...")
            break
        default:
            alert("Opción no válida")
    }
} while (opcion !== 6)
}
MostrarMenu()
