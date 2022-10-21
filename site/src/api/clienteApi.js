import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})

export async function MostrarPerfilCliente(id) {
    const resp = await api.get(`/perfil/cliente/${id}`)
    return resp.data;
}

export async function mostrarComentarios(){
    const resposta = await api.get('/verComentarioC');
    return resposta.data;
} 

export async function alterarPerfilCliente(id, nome, telefone, biografia){

    const resposta = await api.put(`/perfil/cliente/${id}`, {
       
        nome: nome,
        telefone: telefone,
        biografia:biografia
    })
    return resposta.data;

}

export async function AdicionarImagemCliente (id, foto){
    const formData= new FormData();
    formData.append('foto', foto);
    const r = await api.put(`/cliente/${id}/foto`, 
    formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return r.status;
}

export function buscarImagem(foto){
    return `${api.getUri()}/${foto}`
}

export async function inserirComentario(IDcliente, IDprofissional, comentario){
    const resposta = await api.post(`/comentarioC`, {
       
        IDcliente:  IDcliente,
        IDprofissional:IDprofissional,
        comentario: comentario
    })
    return resposta.data;
}

export async function inserirDenunciaCliente(IDprofissional, IDcliente,  classificacao, data, detalhes){
    const resposta = await api.post(`/denunciaC`, {
       
        IDprofissional:IDprofissional,
        IDcliente:  IDcliente,
        classificacao: classificacao,
        data:data,
        detalhes:detalhes
    })
    return resposta.data;
}
