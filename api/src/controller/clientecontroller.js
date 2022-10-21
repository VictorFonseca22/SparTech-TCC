import { Router } from "express";
import multer from 'multer'
import {enviarFotoCliente, editarPerfilCliente, PerfilCliente, verComentarioscliente, fazerComentariocliente, DenunciaCliente } from '../repository/clienterepository.js'
import server from "./usuarioController.js";
const uploadCliente = multer({ dest: 'storage/FotosCliente'})

server.put(`/cliente/:id/foto`,uploadCliente.single('foto'), async(req, resp)=> {
    try {
        if(!req.file){
            throw new Error('A foto é obrigatória')
        }
        const {id} = req.params;
        const foto = req.file.path;

        const resposta = await enviarFotoCliente(foto, id);
        if(resposta != 1){
            throw new Error('A foto não pode ser salva.')
        }
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
})



server.get('/perfil/cliente/:id', async (req, resp) =>{
    try
    {
        const id = Number(req.params.id);

        const resposta = await PerfilCliente(id);

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

server.put('/perfil/cliente/:id', async (req, resp) => {
    try{
        const perfil = req.body
        const {id} = req.params;
        
        
        if(!perfil.nome){
            throw new Error('Nome é obrigatório!');
        }
        
        if(!perfil.telefone){
            throw new Error('Telefone é obrigatório!');
        }
        if(!perfil.biografia) {
            throw new Error('Biografia é obrigatória')
        }
        
        
        const resposta =  await editarPerfilCliente(id, perfil );
        
        if(resposta != 1)
        throw new Error('Perfil não pode ser alterado')
        else {
        resp.sendStatus(204)
        }
    } 
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
        
    }
})

server.get('/verComentarioC', async (req, resp) => {
    try{
        const resposta = await verComentarioscliente();
        resp.send(resposta)
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.post('/comentarioC', async (req, resp) => {
    try{
        const novoComentario = req.body;

        if(!novoComentario.IDprofissional){
            throw new Error('É necessário estar logado para comentar!')
        }
        if(!novoComentario.IDcliente) {
            throw new Error('É necessário selecionar um profissional!')
        }
        if(!novoComentario.comentario){
            throw new Error('Comentário é obrigatório!');
        }

        const comentario = await fazerComentariocliente(novoComentario);
        resp.send(comentario)
    } 
    catch(err){
        resp.status(401).send({
            erro:err.message
        })

    }
})

server.post('/denunciaC', async (req, resp) => {
    try{
        const novaDenuncia = req.body;

        if(!novaDenuncia.IDprofissional){
            throw new Error('É necessário estar logado para denunciar!')
        }
        if(!novaDenuncia.IDcliente) {
            throw new Error('É necessário selecionar um cliente!')
        }
        if(!novaDenuncia.classificacao){
            throw new Error('Classificação da denúncia é obrigatório!');
        }
        if(!novaDenuncia.data){
            throw new Error('Data da ocorrência é obrigatório!');
        }
        if(!novaDenuncia.detalhes){
            throw new Error('Detalhes da denúncia é obrigatório!');
        }

        const denuncia = await DenunciaCliente(novaDenuncia);
        resp.send(denuncia)
    } 
    catch(err){
        resp.status(401).send({
            erro:err.message
        })

    }
})
export default server;