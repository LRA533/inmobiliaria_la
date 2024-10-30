document.addEventListener("DOMContentLoaded", function() {
    const propiedades = [
        "Propiedad 1: Casa en la playa",
        "Propiedad 2: Apartamento en el centro",
        "Propiedad 3: Chalet en las montañas"
    ];

    let index = 0;

    function rotador() {
        const rotadorDiv = document.getElementById("rotador-propiedades");
        rotadorDiv.textContent = propiedades[index];
        index = (index + 1) % propiedades.length;
    }

    setInterval(rotador, 3000); // Cambia cada 3 segundos
});
