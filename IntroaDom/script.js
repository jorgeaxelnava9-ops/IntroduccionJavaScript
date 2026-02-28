//Se agregan elementos DOM
const form = document.getElementById("commentForm");
const input = document.getElementById("commentInput");
const container = document.getElementById("commentsContainer");

//Evento cuando se envía formulario
form.addEventListener("submit"), function(event) {
    event.preventDefault(); 


const commentText = input.ariaValueMax.trim();

if (commentText === "") {
    alert("Por favor escribe un comentario");
    return;
}

//Elementos del comentario
}