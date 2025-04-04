const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload"); 

uploadBtn.addEventListener("click", () => {
    inputUpload.click();

    inputUpload.addEventListener("change", function(e){
        var file = e.target.files[0];
    })
    if(!file.type.match("image/png") && !file.type.match("image/jpeg")){
        alert("Por favor, selecione uma outra image! png ou jpeg.");
        return;
    }
    if(!file.size > 2 * 1024 *1024 ){
        alert("Imagem grande demais! minimo de 2MB.");
        return;
    }
})