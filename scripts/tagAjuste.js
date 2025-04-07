export function tagAjuste() {
  const inputCategorias = document.getElementById("categorias");
  const liTags = document.getElementById("lista-tags");

  inputCategorias.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      const tags = inputCategorias.value.trim(); //remove espaço em branco .trim
      if (tags !== "") {
        const newTags = document.createElement("li");
        newTags.innerHTML = `<p>${tags}</p> <img src="img/close-black.svg" class="remove-tag">`;
        liTags.appendChild(newTags);
        inputCategorias.value = "";
      }
    }
  });

  liTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
      const retiraTag = evento.target.parentElement;
      liTags.removeChild(retiraTag);
    }
  });
}
