import { Router } from "express";
import multer from 'multer'
import {} from '../repository/servicoRepository.js'

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

        if(!novoCadastro.limite){
            throw new Error('Data limite é obrigatória!');
        }
        if(!novoCadastro.telefone){
            throw new Error('Telefone é obrigatório!');
        }
    
        

        const cadastro =  await cadastroProfissional(novoCadastro);
        resp.send(cadastro)
    } 
    catch(err){
        resp.status(401).send({
            erro:err.message
        })

    }
})

