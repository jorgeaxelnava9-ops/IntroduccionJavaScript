//Se agregan elementos DOM
const form = document.getElementById("commentForm");
const input = document.getElementById("commentInput");
const container = document.getElementById("commentsContainer");

//Evento cuando se envía formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); 


const commentText = input.value.trim();

if (commentText === "") {
    alert("Por favor escribe un comentario");
    return;
}

//Elementos del comentario
const commentDiv = document.createElement("div");
commentDiv.classList.add("comment");

//Fecha y hora actual
const date = new Date();
const dateString = date.toLocaleString();

commentDiv.innerHTML = `
    <p>${commentText}</p>
    <small>Publicado el: ${dateString}</small>
    <br>
    <button class="deleteBtn">Eliminar</button>
`;

// Agregar comentario al contenedor
   container.appendChild(commentDiv);

// Limpiar textarea
   input.value = "";

// Evento para eliminar comentario
const deleteButton = commentDiv.querySelector(".deleteBtn");
deleteButton.addEventListener("click", function() {
    commentDiv.remove();
    });
});

