
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/login/:usuario/:senha',(req, res)=>{
    const { usuario, senha } = req.params
    if(usuario == 'adm@adm.com' && senha == '123')
    {
        return res.status(200).json('bem vindo')
    }
    else
    {
        return res.status(200).json('usuario ou senha incorretos!')
    }
});

app.listen(3000,()=>{
    console.log('Running!!')
});