export function publicar() {
  const btnPublicar = document.querySelector(".botao-publicar");
  const listaTags = document.getElementById("lista-tags");

  btnPublicar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nomeProjeto = document.getElementById("nome").value;
    const descricaoProjeto = document.getElementById("descricao").value;
    const categoriaProjeto = Array.from(listaTags.querySelector("p")).map(
      (tag) => tag.textContent
    ).value;

    console.log(nomeProjeto);
    console.log(descricaoProjeto);
    console.log(categoriaProjeto);
  });
}
