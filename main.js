// GENERADOR DE CLIENTES
class GeneradorClientes {
    constructor(usuario, dni, direccion) {
        this.usuario = usuario,
            this.dni = dni,
            this.direccion = direccion
    }
}
// Clientes predeterminados
const cliente1 = new GeneradorClientes("Facundo", 41262481, "Av");
const cliente2 = new GeneradorClientes("Carlos", 18260490, "AV2");
const cliente3 = new GeneradorClientes("Fernanda", 20679900, "AV3");
// Array de clientes
const clientes = [];

clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);



function clientesNuevos(usuario, dni, direccion) {
    usuario = prompt("Ingrese su nombre");
    dni = parseInt(prompt("Ingrese su dni"));
    direccion = prompt("Ingrese su direccion");
    let cliente = new GeneradorClientes(usuario, dni, direccion);
    clientes.push(cliente);
}

// Bienvenida
const bienvenida = () => {
    alert("Bienvenid@ a El Bibliotecario");
    alert("Por favor, genere su usuario");
    clientesNuevos();
}


// Menu
const menu = () => {
    let opcion = parseInt(
        prompt("Indique la opción deseada: \n1) Comprar libro\n2) Solicitar Libro\n3) Ver Carrito \n4) Eliminar Usuario \n5) Salir"));
    return opcion;
}

// LIBROS
class LibrosGenerador {
    constructor(id, titulo, genero, precio) {
        this.id = id,
            this.titulo = titulo,
            this.genero = genero,
            this.precio = precio
    }
}

const libro1 = new LibrosGenerador(1, "Harry Potter", "Fantasia", 3500);
const libro2 = new LibrosGenerador(2, "Misery", "Terror", 2000);
const libro3 = new LibrosGenerador(3, "Oliver Twist", "Clasico", 950);
const libro4 = new LibrosGenerador(4, "Cancion de Navidad", "Clasico", 950);

const libros = [];

libros.push(libro1);
libros.push(libro2);
libros.push(libro3);
libros.push(libro4);

// COMPRAS //// CARRITO

function comprarLibro() {
    alert(`Libros disponibles \n1)${libro1.titulo} - $${libro1.precio} \n2)${libro2.titulo} - $${libro2.precio} \n3)${libro3.titulo} - $${libro3.precio} \n4)${libro4.titulo} - $${libro4.precio}`);
    let compra = parseInt(prompt("¿Que libro querés comprar? Por favor, indicá el numero"));

    if (compra >= 1 && compra <= 4) {
        let libroCarrito = libros.find(item => item.id === compra);
        carrito.push(libroCarrito);
        recompra();
    }else{
        alert(`Opcion invalida`);
        comprarLibro();
    }
}
function recompra() {
    let pregunta = prompt("Querés comprar mas libros?");
    if (pregunta === "si") {
        comprarLibro();
    } else {
        alert("Gracias por tu compra");
    }
}

// PRODUCTOS DEL CARRITO // VER CARRITO
const carrito = [];

function productosCarrito() {
    let listaCarrito = "";
for (let i = 0; i < carrito.length; i++ ){
    listaCarrito = listaCarrito + `\n${carrito[i].titulo} - $${carrito[i].precio}`;
}
    alert(`Este es tu carrito: \n${listaCarrito}`);

}


// SOLICITUD DE LIBROS
function solicitarLibro() {
    let tituloSolicitado = prompt("¿Cuál es el titulo que querés solicitar?");
    let autorSolicitado = prompt("¿Quién es el autor?");
    while (tituloSolicitado === "" && autorSolicitado === "") {
        alert(`Por favor, ingrese los datos solicitados`);
        solicitarLibro();
    }
    let solicitud = new SolicitudLibros(tituloSolicitado, autorSolicitado);
    librosSolicitados.push(solicitud);
    alert(`Gracias por tu solicitud, lo trataremos de conseguir`);

}
const librosSolicitados = [];
class SolicitudLibros {
    constructor(tituloSolicitado, autorSolicitado) {
        this.titulo = tituloSolicitado,
        this.autor = autorSolicitado
    }
}

// ELIMINAR CLIENTE
function eliminarCliente(){
  let  dni = parseInt(prompt("Indique DNI del cliente que desea eliminar"));
  let cliente = clientes.find(cliente => cliente.dni===dni);
  let posicion = clientes.indexOf(cliente);
    clientes.splice(posicion, 1);
        alert (`El cliente ha sido eliminado`);

}


// SALIR
function salir() {
    alert(`Gracias por visitarnos`)
}

// SWITCH MENU
function switchMenu (){
    let opcion = menu();
    switch (opcion) {
        case 1:
            comprarLibro();
            volverMenu();
            break;
    
        case 2:
            solicitarLibro();
            volverMenu();
            break;
    
        case 3:
            productosCarrito();
            volverMenu();
            break;
        case 4:
            eliminarCliente();
            volverMenu();
            break;
    
        case 5:
            salir();
            break;
        default:
            alert("Opcion incorrecta");
            volverMenu();
            break;
    
    }


}
function volverMenu(){
    let pregunta2= prompt("¿Deseas volver al menu?")
    if (pregunta2==="si"){
      switchMenu();
      
     }else{
        salir();
     }
}

bienvenida();
switchMenu();

