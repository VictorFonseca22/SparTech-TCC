import { Router } from "express";
import multer from 'multer'
import server from "./usuarioController.js";
import {DenunciasCliente, DenunciasClienteId, LoginAdm, removerProfissional, listarClientes, removerCliente, listarProfissionais} from '../repository/admRepository.js'


server.post('/loginAdm' , async (req,resp) => {
    try{
        const {email, senha} = req.body;
    
        let resposta = await LoginAdm(email, senha);
        
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

server.get('/adm/denuncia/cliente', async (req, resp) =>{
    try
    {

        const resposta = await DenunciasCliente();

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

server.get('/adm/denuncia/cliente/:id', async (req, resp) =>{
    try
    {
        const id = Number(req.params.id);

        const resposta = await DenunciasClienteId(id);

        if(!resposta)
            resp.status(404).send( [] );
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

server.get('/adm/profissional', async (req, resp) =>{
    try
    {
        const resposta = await listarProfissionais();

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

server.delete('/adm/profissional/:id', async (req,resp) =>{
    try{
        const {id} = req.params;
        const resposta = await removerProfissional(id)

        if(resposta != 1){
            throw new Error('Profissional não pode ser removido')
        }
        resp.status(204).send();
    } 
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/adm/cliente', async (req, resp) =>{
    try
    {
        const resposta = await listarClientes();

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

server.delete('/adm/cliente/:id', async (req,resp) =>{
    try{
        const {id} = req.params;
        const resposta = await removerCliente(id)

        if(resposta != 1){
            throw new Error('Profissional não pode ser removido')
        }
        resp.status(204).send();
    } 
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})







export default server;