
import express from 'express'
import cors from 'cors'
import sql from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/login/:usuario/:senha', async (req, res)=>{
    const { usuario, senha } = req.params

    const consulta = await sql`select * from usuario where
    email = ${usuario} and senha = ${senha}`

    if(consulta != null && consulta != '')
        return res.status(200).json(consulta[0].id);
    else
        return res.status(401).json('Usuario ou senha incorretos')
});

app.get('/transacoes/:id', async (req, res)=>{
    const { id } =  req.params;
    const transacoes = await sql`select 
                                t.id, 
                                t.saldo_antigo,
                                t.tipo,
                                t.data_transacao
                                from transacao as t
                                left join conta as c
                                on t.id_conta = c.id
                                inner join usuario as u
                                on c.id_usuario = u.id
                                where u.id = ${id};`

    return res.status(200).json(transacoes)
})

app.post('/usuario/novo', async (req, res)=>{
    try{
        const {email, senha, nome_usuario} = req.body;
        if(senha.length != 8){
            return res.status(400).json('Senha deve ter 8 caracteres')
        }
        const insert = await sql`insert into usuario
        (email, senha, nome_usuario, nivel, usuario_status)
        values (${email},${senha},${nome_usuario},1,1)` 
        return res.status(200).json('ok')
    }
    catch(error){
        if(error.code == 23505){
            return res.status(409).json('Email ja cadastrado!')
        }
        return res.status(500).json('Erro ao cadastrar usuario!')
    }
});



app.listen(3000,()=>{
    console.log('Running!!')
});