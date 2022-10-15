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

