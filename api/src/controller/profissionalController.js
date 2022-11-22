import { Router } from "express";
import multer from 'multer'
import {BuscaProfissional, enviarFotoProfissional, fazerComentario, PerfilProfissional, verComentarios, ConsultarTodos, editarPerfil, fazerDenuncia, fazerAvaliacao, PrecificarServico} from '../repository/profissionalRepository.js'

const uploadProfissional = multer({ dest: 'storage/FotosProfissional'})
const server = Router();

//Consultar Profissionais
server.get('/profissional/buscar/nome', async(req, resp) => {
    try{
    const {nm} = req.query;

    const resposta = await BuscaProfissional(nm)
    if(!resposta){
        resp.status(404).send([])
    }
    else{
    resp.send(resposta)
}
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
})

//Inserir Foto no Perfil - Cliente


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

//Inserir Comentário
server.post('/comentario', async (req, resp) => {
    try{
        const novoComentario = req.body;

        if(!novoComentario.IDcliente){
            throw new Error('É necessário estar logado para comentar!')
        }
        if(!novoComentario.IDprofissional) {
            throw new Error('É necessário selecionar um profissional!')
        }
        if(!novoComentario.comentario){
            throw new Error('Comentário é obrigatório!');
        }

        const comentario = await fazerComentario(novoComentario);
        resp.send(comentario)
    } 
    catch(err){
        resp.status(401).send({
            erro:err.message
        })

    }
})

//Ver Comentários
server.get('/verComentario/:id', async (req, resp) => {
    try{
        const id = req.params.id
        const resposta = await verComentarios(id);
        resp.send(resposta)
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

// Consultar todos profissionais
server.get('/consultarTodos', async (req, resp) => {
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

//Perfil

//Editar Perfil
server.put('/perfil/profissional/:id', async (req, resp) => {
    try{
        const perfil = req.body
        const {id} = req.params;
        
        if(!perfil.nome){
            throw new Error('Nome é obrigatório!');
        }
        
        if(!perfil.telefone){
            throw new Error('Telefone é obrigatório!');
        }
        if(!perfil.atuacao) {
            throw new Error('Atuação é obrigatória')
        }
        if(!perfil.licenca) {
            throw new Error('Licença é obrigatória')
        }
        
        
        const resposta =  await editarPerfil(id, perfil );
        
        if(resposta != 1)
        throw new Error('Perfil não pode ser alterado')
        else
        resp.sendStatus(204)
    } 
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
        
    }
})

server.get('/perfil/profissional/:id', async (req, resp) =>{
    try
    {
        const id = Number(req.params.id);

        const resposta = await PerfilProfissional(id);

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
//Fazer denuncia
server.post('/denuncia', async (req, resp) => {
    try{
        const novaDenuncia = req.body;

        if(!novaDenuncia.IDcliente){
            throw new Error('É necessário estar logado para denunciar!')
        }
        if(!novaDenuncia.IDprofissional) {
            throw new Error('É necessário selecionar um profissional!')
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

        const denuncia = await fazerDenuncia(novaDenuncia);
        resp.send(denuncia)
    } 
    catch(err){
        resp.status(401).send({
            erro:err.message
        })

    }
})
server.put('/profissional/avaliacao/:id', async (req, resp) => {
    try{
        const avaliacao = req.body
        const {id} = req.params;

        
        
        const resposta =  await fazerAvaliacao(id, avaliacao);
        
        if(resposta != 1)
        throw new Error('Avaliação não pôde ser inserida')
        else
        resp.sendStatus(204)
    } 
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
        
    }
})
server.put('/profissional/preco/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const preco = req.body

        const resposta =  await PrecificarServico(id, preco);
        
        if(!preco.preco){
            throw new Error('Não é possível aceitar um serviço sem precificar')
        }
        else
        resp.sendStatus(204)
    } 
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
        
    }
})
export default server;