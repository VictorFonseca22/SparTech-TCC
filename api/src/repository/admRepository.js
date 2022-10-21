import { con } from "./connection.js";

export async function LoginAdm (email, senha){

    const comando = `
    select 
    id_adm   as    id,
    nm_nome         as    nome
    from tb_adm
    where ds_email = ?
    and ds_senha = ?
    `

    const [linhas] = await con.query(comando, [email,senha])
    return linhas[0];
}
export async function DenunciasCliente (){

    const comando = `
     select tb_denuncia_cliente.id_denuncia_cliente		    id,
			  tb_profissional.nm_profissional				profissional,
              tb_cliente.nm_cliente							cliente,
              tb_denuncia_cliente.ds_classificacao			classificacao,
              tb_denuncia_cliente.ds_detalhes				detalhes,
              DATE_FORMAT (tb_denuncia_cliente.dt_ocorrencia,'%d/%m/%Y') AS 'data'
              from tb_denuncia_cliente
              inner join tb_cliente on tb_cliente.id_cliente = tb_denuncia_cliente.id_cliente
			  inner join tb_profissional on tb_profissional.id_profissional = tb_denuncia_cliente.id_profissional;
    `

    const [linhas] = await con.query(comando)
    return linhas;
}
export async function DenunciasProfissionais (){

    const comando = `
    select tb_denuncia_prof.id_denuncia_prof		         id,
			  tb_profissional.nm_profissional				profissional,
              tb_cliente.nm_cliente							cliente,
              tb_denuncia_prof.ds_classificacao			classificacao,
              tb_denuncia_prof.ds_detalhes				detalhes,
              DATE_FORMAT (tb_denuncia_prof.dt_ocorrencia,'%d/%m/%Y') AS 'data'
              from tb_denuncia_prof
              inner join tb_cliente on tb_cliente.id_cliente = tb_denuncia_prof.id_cliente
			  inner join tb_profissional on tb_profissional.id_profissional = tb_denuncia_prof.id_profissional
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function DenunciasClienteId (id){

    const comando = `
     select tb_denuncia_cliente.id_denuncia_cliente		    id,
			  tb_profissional.nm_profissional				profissional,
              tb_cliente.nm_cliente							cliente,
              tb_denuncia_cliente.ds_classificacao			classificacao,
              tb_denuncia_cliente.ds_detalhes				detalhes,
              DATE_FORMAT (tb_denuncia_cliente.dt_ocorrencia,'%d/%m/%Y') AS 'data'
              from tb_denuncia_cliente
              inner join tb_cliente on tb_cliente.id_cliente = tb_denuncia_cliente.id_cliente
			  inner join tb_profissional on tb_profissional.id_profissional = tb_denuncia_cliente.id_profissional
              where id_denuncia_cliente = ?
    `

    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}
export async function DenunciasProfissionalId (id){

    const comando = `
     select tb_denuncia_prof.id_denuncia_prof		         id,
			  tb_profissional.nm_profissional				profissional,
              tb_cliente.nm_cliente							cliente,
              tb_denuncia_prof.ds_classificacao			classificacao,
              tb_denuncia_prof.ds_detalhes				detalhes,
              DATE_FORMAT (tb_denuncia_prof.dt_ocorrencia,'%d/%m/%Y') AS 'data'
              from tb_denuncia_prof
              inner join tb_cliente on tb_cliente.id_cliente = tb_denuncia_prof.id_cliente
			  inner join tb_profissional on tb_profissional.id_profissional = tb_denuncia_prof.id_profissional
              where id_denuncia_prof = ?
    `

    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}

export async function listarProfissionais (){

    const comando = `
    select id_profissional	id,
    nm_profissional	nome,
    ds_telefone		telefone,
    ds_cpf			cpf,
    ceiling(datediff(curdate(), dt_nasc) / 365) as 'idade'
    from tb_profissional
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function removerProfissional(id){
    const comando = 
    `
    DELETE FROM tb_profissional 
    WHERE id_profissional = ?;
    `

    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows
}

export async function listarClientes (){

    const comando = `
    select id_cliente	id,
    nm_cliente	nome,
    ds_telefone		telefone,
    ds_cpf			cpf,
    ceiling(datediff(curdate(), dt_nasc) / 365) as 'idade'
    from tb_cliente
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function removerCliente(id){
    const comando = 
    `
    DELETE FROM tb_cliente 
    WHERE id_cliente = ?;
    `

    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows
}