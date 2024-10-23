
let usuario = document.querySelector('#usuario').value
let senha = document.querySelector('#senha').value

let botao = document.querySelector('#botaoEntrar')
botao.addEventListener('click',()=>{
    console.log(senha)
    if(usuario == 'adm@adm.com' && senha == '123')
    {
        alert('Bem vindo')
    }
    else{
        alert('Usuario ou senha incorretos!')
    }
})