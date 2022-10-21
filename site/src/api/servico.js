import { URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: URL
})

export async function CadastrarServico(cliente, profissional, tipo, pagamento, rua, complemento, bairro, cidade, uf, limite, detalhes) {
    const Resp = await api.post('/cadastrarServico',{
        cliente:cliente,
        profissional:profissional,
        tipo:tipo,
        pagamento:pagamento,
        rua:rua,
        complemento:complemento,
        bairro:bairro,
        cidade:cidade,
        uf:uf,
        limite:limite,
        detalhes:detalhes
    })
    return Resp.data;
}
export async function ListaPagamento() {
    const resp = await api.get('/api/pagamento')
    return resp.data;
    
}

export async function ServicosAtivosCliente(id) {
    const resp = await api.get(`/servicosAtivosCliente/${id}`)
    return resp.data;
}
export async function ServicosAtivosProfissional(id) {
    const resp = await api.get(`/servicosAtivosProfissional/${id}`)
    return resp.data;
}
export async function SolicitacoesServicos(id) {
    const resp = await api.get(`/solicitacoesServicos/${id}`)
    return resp.data;
}

export async function aceitarServiço(id){

    const resposta = await api.put(`/aceitarServico/${id}`)
    return resposta.status;

}
