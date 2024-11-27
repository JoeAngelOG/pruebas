const imagenes = document.querySelectorAll('.anuncios img');
let index = 0;

setInterval(() => {
    imagenes[index].classList.remove('active');
    index = (index + 1) % imagenes.length;
    imagenes[index].classList.add('active');
}, 3000); // Cambiar cada 3 segundos

function toggleModoOscuro() {
    document.body.classList.toggle('modo-oscuro');
}
