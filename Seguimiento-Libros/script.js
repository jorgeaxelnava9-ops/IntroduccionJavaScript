const formulario = document.getElementById("formulario");
const comentarioInput = document.getElementById("comentarioInput");
const listaComentarios = document.getElementById("listaComentarios");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = comentarioInput.value.trim();

    if (texto ==="") {
        alert("Por favor escribe un comentario");
        return;
    }

    const fechaActual = new Date();
    const fechaTexto = fechaActual.toLocaleDateString();

    const nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");
    
    nuevoComentario.innerHTML = `
  <p>${texto}</p>
  <div class="fecha">Publicado: ${fechaTexto}</div>
  <button class="eliminar">X</button>
`;

    nuevoComentario.querySelector(".eliminar").addEventListener("click", function() {
        nuevoComentario.remove();
    });

    listaComentarios.appendChild(nuevoComentario);
    comentarioInput.value ="";
});