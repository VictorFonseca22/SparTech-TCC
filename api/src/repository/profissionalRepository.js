import { con } from "./connection.js";

export async function ConsultarTodos(){
    const comando =
    `
    select nm_profissional    nome,
       id_tipo_serv           serviço,
       nr_servicos            n°servicos,
       dq_espartech           destaque,
       arq_foto               foto
       from tb_profissional;
    `

    const [linhas] = await con.query(comando)
    return linhas
}


export async function enviarFotoCliente(foto, id){
    const comando =
    `
    update tb_cliente
    set   arq_foto = ?
    where id_cliente = ?
    `
    const [resposta] = await con.query(comando, [foto, id])
    return resposta.affectedRows
}

export async function enviarFotoProfissional(foto, id){
    const comando =
    `
    update tb_profissional
    set   arq_foto = ?
    where id_profissional = ?
    `
    const [resposta] = await con.query(comando, [foto, id])
    return resposta.affectedRows
}