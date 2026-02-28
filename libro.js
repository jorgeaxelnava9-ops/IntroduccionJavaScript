let libro = {
    Título: "Doctor Sueño",
    Autor: "Stephen King",
    Año: 2013,
    Estado: "disponible",
    
    describirLibro: function() {
        console.log("Libro titulado" + this.titulo +
            ", escrito por " +this.Autor +
            "en el año " + this.año +
            ", el estado es: " + this.estado + ".");
        }
    };

libro.describirLibro();
