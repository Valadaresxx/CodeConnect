import { readImage } from "./readImage.js";

export function configurarUpload() {
  const uploadBtn = document.getElementById("upload-btn");
  const inputUpload = document.getElementById("image-upload");
  const imagemPrincipal = document.querySelector(".main-imagem");
  const nomeImg = document.querySelector(".container-imagem-nome p");

  uploadBtn.addEventListener("click", () => {
    inputUpload.click();
  });

  inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];
    if (arquivo) {
      try {
        const conteudoArquivo = await readImage(arquivo);
        imagemPrincipal.src = conteudoArquivo.url;
        nomeImg.textContent = conteudoArquivo.nome;
      } catch (erro) {
        console.error("Erro na leitura do arquivo!");
      }
    }
  });
}
