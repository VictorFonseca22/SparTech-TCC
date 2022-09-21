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


export async function CadastrarProfissional(nome,cpf,email,senha,nascimento,telefone,servico) {
    const Resp = await api.post ('/cadastrarProfissional',{
        nome:nome,
        cpf:cpf,
        email:email,
        senha:senha,
        nascimento:nascimento,
        telefone:telefone,
        servico:servico
    })
    return Resp.data
}

export async function ListaCategoria() {
    const Resp = await api.get('/api/categoria')
    return Resp.data;
    
}