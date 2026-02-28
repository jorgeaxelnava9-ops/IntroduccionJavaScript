let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");

    for (let i = 0; i < librosLeidos.length; i++) {
        console.log("- " + librosLeidos[i]);
    }
}
 
   //Aquí se agregan libros 

    agregarLibro("Harry Potter");
    agregarLibro("La Conspiración");
    agregarLibro("Doctor Sueño");
    agregarLibro("El Psicoanalista");
    agregarLibro("It");
    agregarLibro("El Visitante");
    agregarLibro("Hábitos Atómicos");
    agregarLibro("Don Quijote de la Mancha de Cervantes");
    agregarLibro("El Señor de los Anillos");
    agregarLibro("Pedro Páramo");
    agregarLibro("El Jardín de las Mariposas");

    //Aquí se muestran los libros fuera de la función
mostrarLibrosLeidos();
