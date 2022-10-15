import { Router } from "express";
import multer from 'multer'
import server from "./usuarioController.js";
import {LoginAdm} from '../repository/admRepository.js'


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











export default server;