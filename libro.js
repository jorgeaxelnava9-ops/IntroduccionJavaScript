let libro = {
    titulo: "Doctor Sueño",
    autor: "Stephen King",
    anio: 2013,
    estado: "disponible",
    
    describirLibro: function() {
        console.log("Libro titulado " + this.titulo +
            ", escrito por " + this.autor +
            ", en el anio " + this.anio +
            ", el estado es: " + this.estado + ".");
        }
    };

libro.describirLibro();
