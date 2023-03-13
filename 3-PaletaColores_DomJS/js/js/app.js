
var colorPalet = document.getElementById("inputColor"),
btnVisualizar = document.getElementById("btnVisualizar"),
textoArea = document.getElementById("textoArea"),
cardColor = document.getElementById("cardColor");


//funcion onclick
btnVisualizar.addEventListener("click",()=>{
   textoArea.textContent = colorPalet.value;
   cardColor.style.backgroundColor = colorPalet.value
});