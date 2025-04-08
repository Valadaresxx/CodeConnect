export function tagAjuste() {
  const tagsDisponiveis = ["Front-end", "Html", "Css"];

  async function verificaTagDisponiveis(tagsTexto) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tagsDisponiveis.includes(tagsTexto));
      }, 1000);
    });
  }

  const inputCategorias = document.getElementById("categorias");
  const liTags = document.getElementById("lista-tags");

  inputCategorias.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      const tagsTexto = inputCategorias.value.trim(); //remove espaço em branco .trim
      if (tagsTexto !== "") {
        try {
          const tagExiste = await verificaTagDisponiveis(tagsTexto);
          if (tagExiste) {
            const newTags = document.createElement("li");
            newTags.innerHTML = `<p>${tagsTexto}</p> <img src="img/close-black.svg" class="remove-tag">`;
            liTags.appendChild(newTags);
            inputCategorias.value = "";
          } else {
            alert("tag nao existe");
          }
        } catch (error) {
          console.error("erro tag");
          alert("erro tag");
        }
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
