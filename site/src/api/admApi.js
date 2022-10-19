import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})

export async function LogarAdmin(email,senha) {
    const Resp = await api.post('/loginAdm', {
        email:email,
        senha:senha
    });
    return Resp.data;
}
export async function denunciaProf() {
    const resp = await api.get ('/adm/denuncia/cliente')
    return resp.data
}

export async function DenunciaClienteporId (id){
    const resposta = await api.get(`/adm/denuncia/cliente/${id}`);
    return resposta.data
}
export async function listarCliente() {
    const resp = await api.get ('/adm/profissional')
    return resp.data
}
export async function deletarProfissional(id){
    const resposta = await api.delete(`/adm/profissional/${id}`);
    return resposta.status;
}

