import { Router } from "express";
import multer from 'multer'
import {cadastroCliente, cadastroProfissional, comecarAvaliacao, listarCategorias, listarCategoriasProfissional, LoginCliente, LoginProfissional} from '../repository/usuarioRepository.js'

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
        if(!novoCadastro.cpf){
            throw new Error('CPF é obrigatório!');
        }
        
        if(!novoCadastro.senha){
            throw new Error('Senha é obrigatória!');
        }

        if(!novoCadastro.nascimento){
            throw new Error('Data de nascimento é obrigatória!');
        }

        if(!novoCadastro.telefone){
            throw new Error('Telefone é obrigatório!');
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
// Cadastrar Profissional
server.post('/cadastrarProfissional', async (req, resp) => {
    try{
        const novoCadastro = req.body;
        const avaliacaoNota = 5.00;
        if(!novoCadastro.nome){
            throw new Error('Nome é obrigatório!');
        }

        if(!novoCadastro.email){
            throw new Error('Email é obrigatório!');
        }

        if(!novoCadastro.cpf){
            throw new Error('CPF é obrigatório!');
        }

        if(!novoCadastro.senha){
            throw new Error('Senha é obrigatória!');
        }

        if(!novoCadastro.nascimento){
            throw new Error('Data de nascimento é obrigatória!');
        }
        if(!novoCadastro.telefone){
            throw new Error('Telefone é obrigatório!');
        }
    
        

        const cadastro =  await cadastroProfissional(novoCadastro);
        await comecarAvaliacao(cadastro.IdCadastro, avaliacaoNota)
        resp.send(cadastro)
    } 
    catch(err){
        resp.status(401).send({
            erro:err.message
        })

    }
})

//Login
server.post('/loginProfissional' , async (req,resp) => {
    try{
        const {email, senha} = req.body;
    
        let resposta = await LoginProfissional(email, senha);
        
          if(!resposta){
            throw new Error('Credenciais Inválidas')
        }
        
        resp.send(resposta)

    }
    catch(err){
        resp.status(401).send({
            erro:err.message
        })
    }
})

server.post('/loginCliente' , async (req,resp) => {
    try{
        const {email, senha} = req.body;
    
        let resposta = await LoginCliente(email, senha);
        
          if(!resposta){
            throw new Error('Credenciais Inválidas')
        }
        
        resp.status(201).send(resposta)

    }
    catch(err){
        resp.status(401).send({
            erro:err.message
        })
    }
})





// Listar Categorias
server.get('/api/categoria', async (req, resp) => {
    try {
        const linhas = await listarCategorias();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/profissional/categoria/:id', async (req, resp) => {
    try {
        const id = req.params.id
        const linhas = await listarCategoriasProfissional(id);
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;