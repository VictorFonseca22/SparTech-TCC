import { Router } from "express";
import multer from 'multer'
import {ConsultarTodos, enviarFotoCliente, enviarFotoProfissional} from '../repository/profissionalRepository.js'

const uploadCliente = multer({ dest: 'storage/FotosCliente'})
const uploadProfissional = multer({ dest: 'storage/FotosProfissional'})
const server = Router();

//Consultar Profissionais
server.get('/consultarProfissionais', async (req, resp) => {
    try{
        const resposta = await ConsultarTodos();
        resp.send(resposta) 
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

//Inserir Foto no Perfil - Cliente
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
//Inserir Foto no Perfil - Profissional
server.put(`/profissional/:id/foto`,uploadProfissional.single('foto'), async(req, resp)=> {
    try {
        if(!req.file){
            throw new Error('A foto é obrigatória')
        }
        const {id} = req.params;
        const foto = req.file.path;

        const resposta = await enviarFotoProfissional(foto, id);
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

export default server;