let botao = document.querySelector('#botaoEntrar')
botao.addEventListener('click', 
   async()=>{
      let usuario = document.querySelector('#usuario').value
      let senha = document.querySelector('#senha').value
      let resposta = await fetch(`http://localhost:3000/login/${usuario}/${senha}`)
      let mensagem = await resposta.json();
      console.log(mensagem)
   }
)
 