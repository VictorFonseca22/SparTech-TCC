import { Router } from "express";
import multer from 'multer'
import {cadastroServico, listarPagamentos, ServicosAtivos} from '../repository/servicoRepository.js'
import server from "./usuarioController.js";

server.post('/cadastrarServico', async (req, resp) => {
    try{
        const novoCadastro = req.body;

        if(!novoCadastro.cliente){
            throw new Error('Nome do(a) cliente é obrigatório!');
        }

        if(!novoCadastro.profissional){
            throw new Error('Nome do(a) profissional é obrigatório!');
        }

        if(!novoCadastro.pagamento){
            throw new Error('Tipo de pagamento é obrigatório!');
        }
        if(!novoCadastro.tipo){
            throw new Error('Tipo de serviço é obrigatório!');
        }

        if(!novoCadastro.rua){
            throw new Error('Rua do serviço é obrigatório!');
        }

        if(!novoCadastro.complemento){
            throw new Error('N° da casa é obrigatório!');
        }

        if(!novoCadastro.bairro){
            throw new Error('Bairro do serviço é obrigatório!');
        }

        if(!novoCadastro.cidade){
            throw new Error('Cidade do serviço é obrigatório!');
        }

        if(!novoCadastro.uf){
            throw new Error('Estado do serviço é obrigatório!');
        }

        if(!novoCadastro.limite){
            throw new Error('Data limite é obrigatória!');
        }

        if(!novoCadastro.detalhes){
            throw new Error('Detalhes do serviços são obrigatórios!');
        }
    
        const servico =  await cadastroServico(novoCadastro);
        resp.send(servico)
    } 
    catch(err){
        resp.status(401).send({
            erro:err.message
        })

    }
})
server.get('/api/pagamento', async (req, resp) => {
    try {
        const linhas = await listarPagamentos();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.get('/servicosAtivos/:id', async (req, resp) =>{
    try
    {
        const id = Number(req.params.id);

        const resposta = await ServicosAtivos(id);

        if(!resposta)
            resp.status(404).send([]);
        else
        resp.send(resposta);
    }

    catch(err)
    {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;
