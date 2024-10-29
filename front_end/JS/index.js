
let usuario = document.querySelector('#usuario').value
let senha = document.querySelector('#senha').value

let botao = document.querySelector('#botaoEntrar')
botao.addEventListener('click',()=>{
   fetch(`http://localhost:3000/login/${usuario}/${senha}`)
})
 