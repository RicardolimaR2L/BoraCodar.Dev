var sofa1 = 'imagem/sofá.svg'
var SofaGif = 'imagem/sofá.gif'

function trocar() {
  document.getElementById('img-sofa').src = sofa1
  let aux = sofa1
  sofa1 = SofaGif
  SofaGif = aux
}

alert("clik no botao360 para girar a imagem")
