// Selecciona elementos del DOM
const imagenes = document.querySelectorAll('.anuncios-slider img');
const menuAnuncios = document.getElementById('menu-anuncios');
const descripcionAnuncio = document.querySelector('.descripcion-anuncio');

// Descripciones para los anuncios
const descripciones = [
    "Anuncio 1: Participa en nuestra clase especial de danza.",
    "Anuncio 2: No te pierdas el próximo evento cultural.",
    "Anuncio 3: Aprende más sobre nuestras actividades destacadas."
];

let index = 0; // Índice actual
let rotacionActiva = true; // Controla la rotación automática

// Muestra un anuncio basado en el índice
function mostrarAnuncio(indice) {
    imagenes.forEach(img => img.classList.remove('active'));
    imagenes[indice].classList.add('active');
    descripcionAnuncio.textContent = descripciones[indice];
    index = indice;
}

// Rotación automática de imágenes cada 3 segundos
setInterval(() => {
    if (rotacionActiva) {
        index = (index + 1) % imagenes.length;
        mostrarAnuncio(index);
    }
}, 3000);

// Cambia el anuncio cuando se selecciona en el menú desplegable
menuAnuncios.addEventListener('change', (e) => {
    rotacionActiva = false; // Pausar rotación automática
    mostrarAnuncio(parseInt(e.target.value, 10));
});

// Inicializa mostrando el primer anuncio
mostrarAnuncio(0);
