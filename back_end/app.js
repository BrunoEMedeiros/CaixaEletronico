
import express from 'express'

const app = express();

app.get('/info', (req, res)=>{
    return res.status(200).json(`Running at ${req.protocol}://${req.hostname}:3000`)
});

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