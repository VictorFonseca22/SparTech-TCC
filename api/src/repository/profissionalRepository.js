import { createPool } from "mysql2";
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

export async function fazerComentario (comentario) {
    const comando = `
    
    insert into tb_comentario_prof (id_cliente, id_profissional, ds_comentario, dt_comentario)
values (?, ?, ?, sysdate());
`
const [resposta] = await con.query(comando, [comentario.IDcliente, comentario.IDprofissional, comentario.comentario]);

    comentario.id = resposta.insertId;

    return comentario;
}

export async function verComentarios (){
    const comando = `
    select id_comentario    id,
       nm_cliente       cliente,
       nm_profissional  profissional,
       ds_comentario    comentário,
       DATE_FORMAT (dt_comentario,'%d/%m/%Y %H:%i:%S') AS 'data'
    from tb_comentario_prof
    inner join tb_cliente on tb_cliente.id_cliente = tb_comentario_prof.id_cliente
    inner join tb_profissional on tb_profissional.id_profissional = tb_comentario_prof.id_profissional;
    `

    const [linhas] = await con.query(comando)
    return linhas
}