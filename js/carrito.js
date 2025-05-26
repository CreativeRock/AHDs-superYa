class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDetalles() {
        return `${this.nombre} cuesta Q.${this.precio}`;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto)
    }

    calcularTotal() {
        return this.productos.reduce((total, pre) => total + pre.precio, 0);
    }

    listarProductos() {
        return this.productos.map(pre => `<li class="carrito-productos__detalle"> ${pre.mostrarDetalles()} </li>`).join('');
    }
}

const productoDisponibles = [
    new Producto(1, 'Queso Fresco 250gr.', 18.50),
    new Producto(2, 'Queso Mozzarella 250gr.', 28.75),
    new Producto(3, 'Queso Cheddar 250gr.', 35.00),
    new Producto(4, 'Queso Parmesano 250gr.', 42.90),
    new Producto(5, 'Queso Oaxaca 250gr.', 30.25),
    new Producto(6, 'Queso Panela 250gr.', 24.60),
    new Producto(7, 'Queso Gouda 250gr.', 39.95),
    new Producto(8, 'Queso Manchego 250gr.', 37.80),
    new Producto(9, 'Queso Azul 250gr.', 45.30),
    new Producto(10, 'Queso Ricotta 250gr.', 21.75),
    new Producto(11, 'Queso Cottage 250gr.', 18.90),
    new Producto(12, 'Queso Suizo 250gr.', 40.60),
    new Producto(13, 'Queso Brie 250gr.', 49.00),
    new Producto(14, 'Queso Camembert 250gr.', 47.50),
]

const carrito = new Carrito();

function agregarAlCarrito(id) {
    const producto = productoDisponibles.find(pre => pre.id === id);
    carrito.agregarProducto(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    document.getElementById('listadoCarrito').innerHTML = carrito.listarProductos();
    document.getElementById('total').textContent = carrito.calcularTotal();
}