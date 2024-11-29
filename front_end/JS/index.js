let botao = document.querySelector('#botaoEntrar')
botao.addEventListener('click', 
   async()=>{
      let usuario = document.querySelector('#usuario').value
      let senha = document.querySelector('#senha').value
      if(usuario != '' && senha != '')
      {
         let resposta = await fetch(`http://localhost:3000/login/${usuario}/${senha}`)
         if(resposta.status == 200)
         {
            const id_usuario = await resposta.json()
            window.location
            .replace(`./home.html?id_usuario=${encodeURIComponent(id_usuario)}`)
            
         }
         else{
            alert('Usuario ou senha incorretos!')
         }
      }
      else{
         alert('Preencha todos os campos!')
      }
   }
)
 