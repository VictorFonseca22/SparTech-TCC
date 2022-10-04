import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})

export async function CadastrarServico(cliente, profissional,servico,pagamento,endereco,limite,detalhes) {
    const Resp = await api.post('/cadastrarServico',{
        cliente:cliente,
        profissional:profissional,
        servico:servico,
        pagamento:pagamento,
        endereco:endereco,
        limite:limite,
        detalhes:detalhes
    })
    return Resp.data;
}