import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})

export async function CadastrarCliente(nome, cpf, email, senha,idade, nascimento,telefone) {
    const Resp = await api.post('/cadastrarCliente', {
        nome: nome,
        cpf:cpf,
        email:email,
        senha:senha,
        idade:idade,
        nascimento:nascimento,
        telefone:telefone
    })
    return Resp.data;
}


export async function CadastrarProfissional(nome, email, cpf, senha, nascimento, telefone, servico) {
    const resp = await api.post ('/cadastrarProfissional',{
        nome:nome,
        email:email,
        cpf:cpf,
        senha:senha,
        nascimento:nascimento,
        telefone:telefone,
        servico:servico,
    })
    return resp.data;
}

export async function ListaCategoria() {
    const resp = await api.get('/api/categoria')
    return resp.data;
    
}
export async function ListaCategoriaProfissional(id){
    const resp = await api.get(`/api/profissional/categoria/${id}`)
    return resp.data
}

export async function LogarProfissional(email,senha) {
    const Resp = await api.post('/loginProfissional', {
        email:email,
        senha:senha
    });
    return Resp.data;
}

export async function LogarCliente(email,senha) {
    const Resp = await api.post('/loginCliente', {
        email:email,
        senha:senha
    });
    return Resp.data;
}