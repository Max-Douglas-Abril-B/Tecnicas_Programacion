//1. Declara una cariable llamada mi nombre y almacena tu primer nombre en ella
let MiNombre = "Max"
    console.log(MiNombre)

//2. Crea una variable una variable llamada mi edad y asigna como valor tu edad actual
let Miedad = 19
    console.log(Miedad)

//3. Define una variable tiene mascota y asignale un valor booleando
let TieneMascota = true
    console.log(TieneMascota)

//4. Escribe una condicional que indique que si un numero introducido es mayor, menor o igual a 0
Num1 = 5
    if(Num1<0){
        console.log("El numero es menor a 0")
    }else if(Num1>0){
        console.log("El numero es mayor a 0")
    }else {
        console.log("El numero es 0")
    }

//5. Declara una variable llamada intereses y que almacene un array con 3 cosas que te guste hacer
let Intereses = ["respirar","Comer","Mirar"]
    console.log(Intereses)

//6. Crea un objeto llamado usuario con las propiedades NombreUsuario, Ciudad y TieneLicencia
let Usuario = {
    NombreUsuario: "Pepito",
    Ciudad: "PaloSanto",
    TieneLicencia: true,
  }
console.log(Usuario)

//7. Declara una variable Datovacio y asignale el valor null
let Datovacio = null
    console.log(Datovacio)

//8.Escribe un programa que solicite un numero y muestre en consola los numeros desde el 1 hasta el numero en ingresado
Contador = 0
let Num2 = parseInt(prompt("Ingrese un numero"))
while(Num2>Contador){
    Contador += 1
    console.log(Contador)
}

//9.Crea una variable llamada colorHexadecimal y almacena un valor hexadecimal en ella
let ColorHexadecimal = "FF0000"
    console.log(ColorHexadecimal)

//10.Define la variable miNombreCompleto concatenando tu nombre con tu apellido usando template strings
let MiApellido = "Abril"
let MiNombreCompleto = `${MiNombre} ${MiApellido}`
    console.log(MiNombreCompleto)

//11. Almacena en la variable resultadoSuma el resultado de sumar 25 y 15
let ResultadoSuma = 25 + 15
    console.log(ResultadoSuma)

//12. Almacena en la variable resultadoResta el resultado de restar 50 menos 20
let ResultadoResta = 50 - 20
    console.log(ResultadoResta)

//13.Multiplica 8 por 4 y almacena el resultado en la variable resultadoMultiplicacion
let ResultadoMultiplicacion = 8 * 4
    console.log(ResultadoMultiplicacion)

//14.Divide 100 entre 5 y guarda el resultado en la variable resultadoDivision
let ResultadoDivision = 100 / 5
    console.log(ResultadoDivision)

//15. Obtén el residuo de dividir 15 entre 4 y guárdalo en una variable llamada resultadoModulo
let ResultadoModulo = 15 % 4
    console.log(ResultadoModulo)

//16. Incrementa en una unidad el valor de la variable puntaje usando el operador de incremento
let Puntaje = 0
Puntaje++
    console.log(Puntaje)

//17. Reduce en uno el valor de una variable llamada vidasRestantes usando el operador de decremento
let VidasRestantes = 5
VidasRestantes--
    console.log(VidasRestantes)

//18.Define un array con cinco nombres de frutas diferentes e imprime el array completo
let Frutas = ["Guayaba", "Kiwi", "Cereza", "Pera", "Sandía"]
    console.log(Frutas)

//19. Verifica si el valor 'manzana' está incluido en el array creado anteriormente
let ComprobarFruta = Frutas.includes("Manzana")
    console.log(ComprobarFruta)

//20. Añade un elemento al final de un array y otro elemento nuevo en la segunda posición del mismo
let NuevaFruta1 = "Limon"
let NuevaFruta2 = "Durazno"
Frutas.push(NuevaFruta1)
Frutas.splice(1,0,NuevaFruta2)
    console.log(Frutas)

//21. Elimina un elemento específico del array por su valor y luego elimina otro elemento diferente por su índice
let Valor = Frutas.indexOf("Kiwi")
Frutas.splice(Valor,1) //por valor

Frutas.splice(5,1)//por indice
    console.log(Frutas)

//22.Compara dos variables numéricas para determinar si tienen el mismo valor y guarda el resultado en una variable llamada igualdadNumeros
let Num3 = 5
let Num4 = 6
let IgualdadNumeros = (Num3 == Num4)
    console.log(IgualdadNumeros)

//23.Determina si un número es menor que otro número dado y almacena el resultado booleano en la variable esMenor
let Num5 = 9
let Num6 = 3
let EsMenor = (Num5<Num6)
    console.log(EsMenor)

//Crea un programa que guarde una palabra secreta en una variable, solicite al usuario que introduzca la palabra y luego muestre si coincide, ignorando diferencias entre mayúsculas y minúsculas
let PalabraSecreta = "Gato"
let PalabraIngresada = prompt("Ingrese la palabra secreta")
let Comparacion = (PalabraSecreta.toLowerCase() === PalabraIngresada.toLowerCase())
if (Comparacion){
    console.log("La palabra secreta es correcta")
}else {
    console.log("La palabra secreta no es correcta")
}

//25.Una persona puede recibir un descuento especial solo si tiene más de 18 años y gana menos de $500 mensuales. Escribe un programa que pregunte edad e ingresos al usuario e indique si tiene derecho al descuento.
let Edad = parseInt(prompt("Ingrese su edad"))
let Salario = parseInt(prompt("Ingrese su salario"))
if (Edad>18){
    if (Salario<500){
        console.log("Tiene derecho al descuento")
    }
    else{
        console.log("No tiene derecho al descuento")
    }
}
else {
    console.log("No tiene derecho al descuento")
}
