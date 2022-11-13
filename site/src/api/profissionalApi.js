import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})


export async function MostrarPerfil(id) {
    const resp = await api.get(`/perfil/profissional/${id}`)
    return resp.data;
}



export async function mostrarComentarios(id){
    const resposta = await api.get(`/verComentario/${id}`);
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

export async function alterarPerfil(id, nome, telefone, atuacao, licenca){

    const resposta = await api.put(`/perfil/profissional/${id}`, {
       
        nome: nome,
        telefone: telefone,
        atuacao: atuacao,
        licenca: licenca
    })
    return resposta.data;

}
export async function AdicionarImagem (id, foto){
    const formData= new FormData();
    formData.append('foto', foto);
    const r = await api.put(`/profissional/${id}/foto`, 
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
    const resposta = await api.post(`/comentario`, {
       
        IDcliente:  IDcliente,
        IDprofissional:IDprofissional,
        comentario: comentario
    })
    return resposta.data;
}

export async function inserirDenuncia(IDcliente, IDprofissional, classificacao, data, detalhes){
    const resposta = await api.post(`/denuncia`, {
       
        IDcliente:  IDcliente,
        IDprofissional:IDprofissional,
        classificacao: classificacao,
        data:data,
        detalhes:detalhes
    })
    return resposta.data;
}
