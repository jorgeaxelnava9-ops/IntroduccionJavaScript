let nota = 88;

if (nota >= 0 && nota <= 100) {

    console.log("La nota del estudiante es: " + nota);

    if (nota >= 90) {
        console.log("El estudiante aprueba con ¡¡¡¡¡Excelente 🥳🎉!!!!!");
    } else if (nota >= 75) {
        console.log("El estudiante aprueba con ¡¡¡Bien 😎!!!");
    } else if (nota >= 60) {
        console.log("El estudiante aprueba con Suficiente 🙂");
    } else {
        console.log("El estudiante no aprueba 😔");
    }

} else {
    console.log("La nota no es válida ❌❌");
}