import { Router } from "express";
import multer from 'multer'
import {cadastroServico} from '../repository/servicoRepository.js'
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

        if(!novoCadastro.tipo){
            throw new Error('Tipo de serviço é obrigatório!');
        }

        if(!novoCadastro.pagamento){
            throw new Error('Tipo de pagamento é obrigatório!');
        }

        if(!novoCadastro.endereco){
            throw new Error('Endereço do serviço é obrigatório!');
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

export default server;
