precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// Captura las clases y Id's Requeridos
const cantidad = document.querySelector(".cantidad");
const agregarCantidad = document.querySelector(".agregar");
const quitarCantidad = document.querySelector(".quitar");
const total = document.querySelector(".valor-total");

// Se generan variables para asignar los valores
let cantidadTotal = 0;
cantidad.innerHTML = cantidadTotal;

let totalCalculado = 0;
total.innerHTML = totalCalculado;

// Se agregan eventos para agregar o quitar productos
agregarCantidad.addEventListener("click", () => {
    cantidadTotal++;
    cantidad.innerHTML = cantidadTotal;
    totalCalculado = precio * cantidadTotal;
    total.innerHTML = totalCalculado;
});

quitarCantidad.addEventListener("click", () => {
    if (cantidadTotal <= 0) {
        cantidadTotal = 0;
    } else {
        cantidadTotal--;
        totalCalculado = precio * cantidadTotal;
    }
    cantidad.innerHTML = cantidadTotal;
    total.innerHTML = totalCalculado;
});
