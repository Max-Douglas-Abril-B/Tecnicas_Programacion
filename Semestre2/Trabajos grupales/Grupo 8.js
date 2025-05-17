//  Grupo 8

let carrito = [];


function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:")
    let precio = parseFloat(prompt("Ingrese el precio del producto:"))
    let cantidad = parseInt(prompt("Ingrese la cantidad:"))

    if (precio > 0 && cantidad > 0) {
        carrito.push({ nombre, precio, cantidad })
        alert("Agregado al carrito con exito")
    } else {
        alert("Ingrese datos validos")
    }
}


function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.")
    } else {
        let mensaje = "Productos en el carrito:\n"
        for (let i = 0; i < carrito.length; i++) {
            let producto = carrito[i];
            mensaje += `${i + 1}. ${producto.nombre} - [$${producto.precio} x ${producto.cantidad}]\n`
        }
        alert(mensaje)
    }
}

function calcularTotal() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.")
    } else {
        let total = 0
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].precio * carrito[i].cantidad
        }
        alert(`Total de la compra: $${total.toFixed(2)}`)
    }
}


function eliminarProducto() {
    let index = parseInt(prompt("Ingrese el número del producto a eliminar:")) - 1
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1)
        alert("Producto eliminado del carrito")
    } else {
        alert("Producto no encontrado")
    }
}


function vaciarCarrito() {
    carrito = [];
    alert("El carrito ha sido vaciado.")
}


function menu() {
    let opcion
    do {
        opcion = parseInt(prompt("Carrito de Compras:\n1. Agregar producto\n2. Mostrar carrito\n3. Calcular total\n4. Eliminar producto\n5. Vaciar carrito\n6. Salir"))
        switch (opcion) {
            case 1:
                agregarProducto()
                break
            case 2:
                mostrarCarrito()
                break
            case 3:
                calcularTotal()
                break
            case 4:
                eliminarProducto()
                break
            case 5:
                vaciarCarrito()
                break
            case 6:
                alert("gracias por su compra")
                break
            default:
                alert("Ingrese un dato valido")
        }
    } while (opcion !== 6)
}

menu()
