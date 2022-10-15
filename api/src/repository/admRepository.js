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

