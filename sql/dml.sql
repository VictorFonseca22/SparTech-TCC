-- Inserir tipo de serviço
insert into tb_tipo_serv (nm_servico, ds_carga_hr)
     values('Manutenção de computadores', '13:00 às 19:00');
     
-- Inserir tipo de pagamento
insert into tb_pagamento (nm_tp_pagt)
     values('Débito');
     
-- Cadastro
insert into tb_cliente (nm_cliente, ds_email, ds_senha, ds_cpf, ds_telefone, dt_nasc)
     values('Adamastor', 'adamas@gmail.com', '1234', '459.411.888-33', '96962-9301', '2000-12-25');
insert into tb_profissional (nm_profissional, ds_email, ds_senha, ds_cpf, ds_telefone, dt_nasc, id_tipo_serv, nr_servicos, dq_espartech)
     values('Gabriel', 'gabriel@gmail.com', '1234', '123.456.789-00', '99999-9999', '1995-08-23', 1, 72, true);
 
-- Criação de serviço
insert into tb_servico (id_cliente, id_profissional, id_tipo_serv, id_pagamento, id_endereco, dt_limite, vl_pagt, ds_carga_hr, ds_detalhes, ds_situacao)
	values(1, 1, 1, 1, 1, '2022-10-25', '100.00', '3 horas', 'Notebook só liga conectado na fonte', 'Feito mas não pago');


-- Login, Validar ifnull por meio da api

 select id_cliente      id,
        nm_cliente      nome
   from tb_cliente
  where ds_email = 'adamas@gmail.com'
    and ds_senha = '1234';
    
select id_profissional       id,
        nm_profissional      nome
   from tb_profissional
  where ds_email = 'gabriel@gmail.com'
    and ds_senha = '1234';
    

-- Busca de profissionais

select nm_profissional    nome,
       id_tipo_serv       serviço,
       nr_servicos        n°servicos,
       dq_espartech       destaque,
       arq_foto           foto
       from tb_profissional;
    
    
-- Comentário no perfil do profissional

insert into tb_comentario_prof (id_cliente, id_profissional, ds_comentario, dt_comentario)
values (1, 2, 'Ótimo profissional', sysdate());

select id_comentario    id,
       id_cliente       cliente,
       id_profissional  profissional,
       ds_comentario    comentário,
       DATE_FORMAT (dt_comentario,'%d/%m/%Y %H:%i:%S') AS 'data'
    from tb_comentario_prof;
    
    
insert into tb_avaliacao (id_profissional, vl_avaliacao)
       values (3, 5);
       
	update tb_profissional 
    set  ar_atuacao =  "atuo",
    ds_licencas = "pode passar"
    where id_profissional = 2;
    
	select * from tb_servico;
       
    select p.nm_profissional    nome,
       p.id_tipo_serv           serviço,
       p.nr_servicos            n°servicos,
       p.dq_espartech           destaque,
       p.arq_foto               foto,
       tb_avaliacao.vl_avaliacao 		avaliacao
       from tb_profissional   as   p
       inner join tb_avaliacao on p.id_profissional = tb_avaliacao.id_profissional
       inner join tb_tipo_serv on p.id_tipo_serv = tb_tipo_serv.id_tipo_serv
       where nm_servico like '%Manu%';
       
insert into tb_endereco (id_endereco, ds_endereco)
values (1, "Rua xique xique, 47");

