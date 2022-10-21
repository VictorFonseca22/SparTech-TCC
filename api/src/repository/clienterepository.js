import { con } from "./connection.js";

export async function enviarFotoCliente(foto, id) {
    const comando =
        `
    update tb_cliente
    set   arq_foto = ?
    where id_cliente = ?
    `
    const [resposta] = await con.query(comando, [foto, id])
    return resposta.affectedRows
}

export async function PerfilCliente(id) {
    const comando = `
    select  tb_cliente.id_cliente id,
            arq_foto            	 		foto,
            nm_cliente      			    nome,
            ds_telefone        			    telefone,
            ds_email            		 	email,
            from tb_cliente
    `
    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function DenunciaCliente(denuncia) {
    const comando = `
    
    insert into tb_denuncia_prof (id_cliente, id_profissional, ds_classificacao, ds_detalhes ,dt_ocorrencia)
values (?, ?, ?, ?, ?);
`
    const [resposta] = await con.query(comando, [denuncia.IDprofissional, denuncia.IDcliente, denuncia.classificacao, denuncia.detalhes, denuncia.data]);

    denuncia.id = resposta.insertId;

    return denuncia;
}

export async function editarPerfilCliente(id, perfil) {
    const comando = `
    update tb_cliente
    set   nm_cliente      = ?,
          ds_telefone     = ?,
    where id_cliente      = ?;
    `
    const [resp] = await con.query(comando, [perfil.nome, perfil.telefone, perfil.atuacao, id]);

    return resp.affectedRows;
}

export async function fazerComentariocliente(comentario) {
    const comando = `
    
    insert into tb_comentario_cliente (id_profissional, id_cliente, ds_comentario, dt_comentario)
values (?, ?, ?, sysdate());
`
    const [resposta] = await con.query(comando, [comentario.IDprofissional, comentario.IDcliente, comentario.comentario]);

    comentario.id = resposta.insertId;

    return comentario;
}

export async function verComentarioscliente() {
    const comando = `
    select id_comentario    id,
    nm_profissional  profissional,
    nm_cliente       cliente,
       ds_comentario    comentário,
       DATE_FORMAT (dt_comentario,'%d/%m/%Y %H:%i:%S') AS 'data'
    from tb_comentario_cliente
    inner join tb_profissional on tb_profissional.id_profissional = tb_comentario_prof.id_profissional;
    inner join tb_cliente on tb_cliente.id_cliente = tb_comentario_prof.id_cliente
    `

    const [linhas] = await con.query(comando)
    return linhas
}