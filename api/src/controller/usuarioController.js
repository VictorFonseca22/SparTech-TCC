
import { Router } from "express";
import multer from 'multer'
import {cadastroCliente, cadastroProfissional} from '../repository/usuarioRepository.js'

const uploadCliente = multer({ dest: 'storage/FotosCliente'})
const uploadProfissional = multer({ dest: 'storage/FotosProfissional'})
const server = Router();
// Cadastrar Cliente
server.post('/cadastrarCliente', async (req, resp) => {
    try{
        const novoCadastro = req.body;

        if(!novoCadastro.nome){
            throw new Error('Nome é obrigatório!');
        }

        if(!novoCadastro.email){
            throw new Error('Email é obrigatório!');
        }

        if(!novoCadastro.telefone){
            throw new Error('Telefone é obrigatório!');
        }

        if(!novoCadastro.senha){
            throw new Error('Senha é obrigatória!');
        }

        if(!novoCadastro.nascimento){
            throw new Error('Data de nascimento é obrigatória!');
        }
     
        if(!novoCadastro.cpf){
            throw new Error('CPF é obrigatório!');
        }

        const cadastro =  await cadastroCliente(novoCadastro);
        resp.send(cadastro)
    } 
    catch(err){
        resp.status(401).send({
            erro:err.message
        })

    }
})

export default server;