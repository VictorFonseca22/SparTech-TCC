import { con } from "./connection.js";

export async function cadastroServico (servico){
    const comando = 
    `
    insert into tb_servico (id_cliente, id_profissional, id_tipo_serv, id_pagamento, ds_logradouro, ds_complemento, ds_bairro, ds_cidade, ds_uf, dt_limite, vl_pagt, ds_carga_hr, ds_detalhes, ds_situacao)
     values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

    const [resposta] = await con.query(comando, [servico.cliente ,servico.profissional, servico.tipo ,servico.pagamento ,servico.rua , servico.complemento, servico.bairro, servico.cidade, servico.uf, servico.limite,  servico.valor, servico.carga, servico.detalhes, servico.situacao ]);
 
    servico.IdCadastro = resposta.insertId;

    return servico;
}