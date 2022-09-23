import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})


export async function MostrarPerfil(id) {
    const resp = await api.get(`/perfil/profissional/${id}`)
    return resp.data;
}

export async function AdicionarImagem (id, foto){
    const formData= new FormData();
    FormData.append('foto', foto);
    const r = await api.put(`/profissional/${id}/foto`, 
    formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return r.status;
}

export async function mostrarComentarios(){
    const resposta = await api.get('/verComentario');
    return resposta.data;
} 

export async function listarTodosProfissionais(){
    const resposta = await api.get('/consultarTodos');
    return resposta.data;
} 

export async function listarPorNome(nome){
    const resposta = await api.get(`/profissional/buscar/nome?nm=${nome}`);
    return resposta.data;
} 