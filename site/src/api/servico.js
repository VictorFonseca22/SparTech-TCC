import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})

export async function CadastrarServico(cliente, profissional,tipo,pagamento,endereco,limite,detalhes) {
    const resp = await api.post('/cadastrarServico',{
        cliente:cliente,
        profissional:profissional,
        tipo:tipo,
        pagamento:pagamento,
        endereco:endereco,
        limite:limite,
        detalhes:detalhes
    })
    return resp.data;
}