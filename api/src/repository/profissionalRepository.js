import { con } from "./connection.js";




export async function BuscaProfissional(nome){
    const comando =
    `
    select p.nm_profissional    nome,
       tb_tipo_serv.nm_servico  serviço,
       p.nr_servicos            n°servicos,
       p.dq_espartech           destaque,
       p.arq_foto               foto,
       tb_avaliacao.vl_avaliacao 		avaliacao
       from tb_profissional   as   p
       inner join tb_avaliacao on p.id_profissional = tb_avaliacao.id_profissional
       inner join tb_tipo_serv on p.id_tipo_serv = tb_tipo_serv.id_tipo_serv
       where nm_servico like ?;
    `

    const [linhas] = await con.query(comando, [`%${nome}%`])
    return linhas
}

export async function ConsultarTodos(){
    const comando =
    `
    select p.nm_profissional    nome,
    tb_tipo_serv.nm_servico           serviço,
       p.nr_servicos            Num_servicos,
       p.dq_espartech           destaque,
       p.arq_foto               foto,
       tb_avaliacao.vl_avaliacao 		avaliacao
       from tb_profissional   as   p
       inner join tb_avaliacao on p.id_profissional = tb_avaliacao.id_profissional
       inner join tb_tipo_serv on p.id_tipo_serv = tb_tipo_serv.id_tipo_serv
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

export async function editarPerfil (id, perfil) {
    const comando = `
    update tb_profissional
    set   nm_profissional = ?,
          ds_telefone     = ?,
          ar_atuacao      = ?,
          ds_licencas     = ?
    where id_profissional = ?;
    `
    const [resp] = await con.query (comando, [perfil.nome, perfil.telefone, perfil.atuacao, perfil.licenca, id]);

    return resp.affectedRows;
}

export async function PerfilProfissional (id){
    const comando = `
    select  tb_profissional.id_profissional id,
            arq_foto            	 		foto,
            nm_profissional    			    nome,
            ds_telefone        			    telefone,
            ds_email            		 	email,
            ar_atuacao        			    area,
            ds_licencas						licenca,
			tb_avaliacao.vl_avaliacao 		avaliacao
            from tb_profissional
            inner join tb_avaliacao on tb_profissional.id_profissional = tb_avaliacao.id_profissional
            where tb_profissional.id_profissional = ?;
    `
    const [linhas] = await con.query(comando, [id]);
        return linhas;

}

