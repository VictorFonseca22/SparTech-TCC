import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})

export async function CadastrarServico(clein) {
    const resp = await api.post('/cadastrarServico',{

    })
}