
const urlParams = new URLSearchParams(window.location.search);
const id_usuario = urlParams.get('id_usuario');

async function handleTransacts()
{
    const div_transacoes = document.querySelector('#transacoes')
    const resposta = await 
    fetch(`http://192.168.1.27:3000/transacoes/${parseInt(id_usuario)}`)
    const transacoes = await resposta.json()
    transacoes.map((transacao)=>{
        const card_transacao = document.createElement('div');

        const saldo_antigo = document.createElement('div');
        saldo_antigo.innerText = transacao.saldo_antigo;

        const tipo = document.createElement('div');
        tipo.innerText = transacao.tipo;

        const data = document.createElement('div');
        data.innerText = transacao.data_transacao;

        card_transacao.append(tipo,saldo_antigo,data)
        div_transacoes.append(card_transacao)
    })
}

handleTransacts()