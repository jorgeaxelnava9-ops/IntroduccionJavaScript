let nota=85;

if (nota >=0) {
    console.log("La nota del estudiante es:" + nota);
}

if (nota >=90) {
    console.log("El estudiantes aprueba con Excelente 🥳🎉");
}
else if (nota >=75 && nota <=89) {
    console.log("El estudiante aprueba con bien 😎");
}
else if (nota >=60 && nota <=74) {
    console.log("El estudiante aprueba con suficiente 🙂");
}
else {
    console.log("El estudiante no aprueba 😔");
}
else {
    console.log("La nota no es válida. ❌❌");
}