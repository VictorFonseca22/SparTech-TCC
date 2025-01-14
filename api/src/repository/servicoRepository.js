import { con } from "./connection.js";

export async function cadastroServico (servico){
    const comando = 
    `
    insert into tb_servico (id_cliente, id_profissional, id_tipo_serv, id_pagamento, ds_logradouro, ds_complemento, ds_bairro, ds_cidade, ds_uf, dt_limite, vl_pagt, ds_carga_hr, ds_detalhes, ds_situacao, srv_aprovado, srv_status)
     values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pendente', false, false);
    `

    const [resposta] = await con.query(comando, [servico.cliente ,servico.profissional, servico.tipo ,servico.pagamento ,servico.rua , servico.complemento, servico.bairro, servico.cidade, servico.uf, servico.limite,  servico.valor, servico.carga, servico.detalhes]);
 
    servico.IdCadastro = resposta.insertId;

    return servico;
}

export async function listarPagamentos() {
    const comando = `
    select id_pagamento         as idPagamento,
    nm_tp_pagt                  as pagamento
    from tb_pagamento
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function ServicosAtivosCliente(id) {
    const comando = `
    select tb_servico.id_servico             id,
    tb_cliente.nm_cliente      cliente, 
    tb_cliente.ds_telefone            tel_cliente,
    tb_profissional.nm_profissional        profissional, 
    tb_profissional.arq_foto            foto,
    tb_profissional.ar_atuacao            area,
    tb_tipo_serv.nm_servico             tipo_servico, 
    tb_servico.id_pagamento           tipo_pagamento, 
    tb_servico.ds_logradouro          rua, 
    tb_servico.ds_complemento         complemento, 
    tb_servico.ds_bairro              bairro, 
    tb_servico.ds_cidade              cidade, 
    tb_servico.ds_uf                  estado, 
    DATE_FORMAT (tb_servico.dt_limite,'%d/%m/%Y') AS 'data', 
    tb_servico.vl_pagt                valor, 
    tb_servico.ds_detalhes            detalhes, 
    tb_servico.ds_situacao            situacao               

    from tb_servico
    inner join tb_cliente on tb_cliente.id_cliente = tb_servico.id_cliente
    inner join tb_profissional on tb_profissional.id_profissional = tb_servico.id_profissional
    inner join tb_tipo_serv on tb_tipo_serv.id_tipo_serv = tb_servico.id_tipo_serv
    where tb_servico.id_cliente = ?
    and srv_aprovado = true
    and srv_status = false;
    `

    const [linhas] = await con.query(comando , [id]);
    return linhas;
}

export async function ServicosAtivosProfissional(id) {
    const comando = `
    select tb_servico.id_servico             id,
    tb_cliente.nm_cliente      cliente, 
    tb_cliente.ds_telefone            tel_cliente,
    tb_profissional.nm_profissional        profissional, 
    tb_profissional.arq_foto            foto,
    tb_profissional.ar_atuacao            area,
    tb_tipo_serv.nm_servico             tipo_servico, 
    tb_servico.id_pagamento           tipo_pagamento, 
    tb_servico.ds_logradouro          rua, 
    tb_servico.ds_complemento         complemento, 
    tb_servico.ds_bairro              bairro, 
    tb_servico.ds_cidade              cidade, 
    tb_servico.ds_uf                  estado, 
    DATE_FORMAT (tb_servico.dt_limite,'%d/%m/%Y') AS 'data', 
    tb_servico.vl_pagt                valor, 
    tb_servico.ds_detalhes            detalhes, 
    tb_servico.ds_situacao            situacao               

    from tb_servico
    inner join tb_cliente on tb_cliente.id_cliente = tb_servico.id_cliente
    inner join tb_profissional on tb_profissional.id_profissional = tb_servico.id_profissional
    inner join tb_tipo_serv on tb_tipo_serv.id_tipo_serv = tb_servico.id_tipo_serv
    where tb_servico.id_profissional = ?
    and srv_aprovado = true
    and srv_status = false
    `

    const [linhas] = await con.query(comando , [id]);
    return linhas;
}
export async function ServicosAtivosClienteporId(id) {
    const comando = `
    select tb_servico.id_servico             id,
    tb_cliente.nm_cliente      cliente, 
    tb_cliente.ds_telefone            tel_cliente,
    tb_profissional.nm_profissional        profissional, 
    tb_profissional.arq_foto            foto,
    tb_profissional.ar_atuacao            area,
    tb_tipo_serv.nm_servico             tipo_servico, 
    tb_servico.id_pagamento           tipo_pagamento, 
    tb_servico.ds_logradouro          rua, 
    tb_servico.ds_complemento         complemento, 
    tb_servico.ds_bairro              bairro, 
    tb_servico.ds_cidade              cidade, 
    tb_servico.ds_uf                  estado, 
    DATE_FORMAT (tb_servico.dt_limite,'%d/%m/%Y') AS 'data', 
    tb_servico.vl_pagt                valor, 
    tb_servico.ds_detalhes            detalhes, 
    tb_servico.ds_situacao            situacao               

    from tb_servico
    inner join tb_cliente on tb_cliente.id_cliente = tb_servico.id_cliente
    inner join tb_profissional on tb_profissional.id_profissional = tb_servico.id_profissional
    inner join tb_tipo_serv on tb_tipo_serv.id_tipo_serv = tb_servico.id_tipo_serv
    where tb_servico.id_servico = ?
    and srv_aprovado = true
    and srv_status = false;
    `

    const [linhas] = await con.query(comando , [id]);
    return linhas;
}



export async function SolicitacoesServicos(id) {
    const comando = `
    select tb_servico.id_servico             id,
    tb_cliente.nm_cliente      cliente, 
    tb_profissional.nm_profissional   profissional, 
    tb_profissional.arq_foto          foto,
    tb_profissional.ar_atuacao        area,
    tb_tipo_serv.nm_servico           tipo_servico, 
    tb_servico.id_pagamento           tipo_pagamento, 
    tb_servico.ds_logradouro          rua, 
    tb_servico.ds_complemento         complemento, 
    tb_servico.ds_bairro              bairro, 
    tb_servico.ds_cidade              cidade, 
    tb_servico.ds_uf                  estado, 
    DATE_FORMAT (tb_servico.dt_limite,'%d/%m/%Y') AS 'data', 
    tb_servico.vl_pagt                valor, 
    tb_servico.ds_detalhes            detalhes, 
    tb_servico.ds_situacao            situacao               

    from tb_servico
    inner join tb_cliente on tb_cliente.id_cliente = tb_servico.id_cliente
    inner join tb_profissional on tb_profissional.id_profissional = tb_servico.id_profissional
    inner join tb_tipo_serv on tb_tipo_serv.id_tipo_serv = tb_servico.id_tipo_serv
    where tb_servico.id_profissional = ?
    and srv_aprovado = false
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function aceitarServiço(id) {
    const comando = `
    update tb_servico
    set   srv_aprovado = true,
          ds_situacao = 'Pendente'
    where id_servico = ?
          
    `
    const [resp] = await con.query(comando, [id]);

    return resp.affectedRows;
}

export async function concluirServico(id) {
    const comando = `
    update tb_servico
    set   srv_status = true
    where id_servico = ?
          
    `
    const [resp] = await con.query(comando, [id]);

    return resp.affectedRows;
}

export async function ServicoConcluido(id) {
    const comando = `
    select tb_servico.id_servico             id,
    tb_cliente.nm_cliente      cliente, 
    tb_cliente.ds_telefone            telefone_cliente,
    tb_profissional.nm_profissional   profissional, 
    tb_profissional.arq_foto          foto,
    tb_profissional.ar_atuacao        area,
    tb_tipo_serv.nm_servico           tipo_servico, 
    tb_servico.id_pagamento           tipo_pagamento, 
    tb_servico.ds_logradouro          rua, 
    tb_servico.ds_complemento         complemento, 
    tb_servico.ds_bairro              bairro, 
    tb_servico.ds_cidade              cidade, 
    tb_servico.ds_uf                  estado, 
    DATE_FORMAT (tb_servico.dt_limite,'%d/%m/%Y') AS 'data', 
    tb_servico.vl_pagt                valor, 
    tb_servico.ds_detalhes            detalhes, 
    tb_servico.ds_situacao            situacao               

    from tb_servico
    inner join tb_cliente on tb_cliente.id_cliente = tb_servico.id_cliente
    inner join tb_profissional on tb_profissional.id_profissional = tb_servico.id_profissional
    inner join tb_tipo_serv on tb_tipo_serv.id_tipo_serv = tb_servico.id_tipo_serv
    where tb_servico.id_profissional = ?
    and srv_status = true
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function removerServico(id){
    const comando = 
    `
    DELETE FROM tb_servico 
    WHERE id_servico = ?;
    `

    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows
}

export async function pagarServico(id) {
    const comando = `
    update tb_servico
    set ds_situacao = 'Pago',
        srv_status = true
    where id_servico = ?
          
    `
    const [resp] = await con.query(comando, [id]);

    return resp.affectedRows;
}