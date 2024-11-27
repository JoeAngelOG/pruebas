function cargarFondo() {
    const inputFondo = document.getElementById('upload-fondo');
    inputFondo.click();

    inputFondo.onchange = () => {
        const file = inputFondo.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.body.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    };
}
