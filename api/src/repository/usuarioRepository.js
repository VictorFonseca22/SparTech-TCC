import { con } from "./connection.js";

export async function cadastroCliente (cliente){
    const comando = 
    `
    insert into tb_cliente (nm_cliente, ds_email, ds_senha, ds_cpf, ds_telefone, dt_nasc)
     values(?, ?, ?, ?, ?, ?);
    `

    const [resposta] = await con.query(comando, [cliente.nome, cliente.email, cliente.senha, cliente.cpf, cliente.telefone, cliente.nascimento]);
 
    cliente.id = resposta.insertId;

    return cliente;
}

export async function cadastroProfissional (profissional){
    const comando = 
    `
    insert into tb_profissional (nm_profissional, ds_email, ds_senha, ds_cpf, ds_telefone, dt_nasc, id_tipo_serv)
     values(?, ?, ?, ?, ?, ?, ?);
    `

    const [resposta] = await con.query(comando, [profissional.nome, profissional.email, profissional.senha, profissional.cpf, profissional.telefone, profissional.nascimento, profissional.servico]);
 
    profissional.id = resposta.insertId;

    return profissional;
}

export async function LoginCliente (email, senha){

    const comando = `
    select id_cliente  as    id,
    nm_cliente         as    nome
    from tb_cliente
    where ds_email = ?
    and ds_senha = ?
    `

    const [linhas] = await con.query(comando, [email,senha])
    return linhas[0];
}

export async function LoginProfissional (email, senha){

    const comando = `
    select id_profissional  as    id,
    nm_profissional         as    nome
    from tb_profissional
    where ds_email = ?
    and ds_senha = ?
    `

    const [linhas] = await con.query(comando, [email,senha])
    return linhas[0];
}

export async function listarCategorias() {
    const comando = `
        select id_tipo_serv         as id,
               nm_servico           as nome
          from tb_tipo_serv
    `

    const [linhas] = await con.query(comando);
    return linhas;
}


