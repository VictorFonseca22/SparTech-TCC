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