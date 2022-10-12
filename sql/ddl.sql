create database Spartech;
use Spartech;

create table tb_tipo_serv  (
  id_tipo_serv         int primary key auto_increment,
  nm_servico              varchar(100),
  ds_carga_hr          varchar(100)
);



create table tb_profissional (
  id_profissional       int primary key auto_increment,
  id_tipo_serv          int,
  nm_profissional       varchar(100),
  ds_email              varchar(100),
  ds_senha              varchar(100),
  ds_cpf                varchar(14),
  ds_telefone           varchar(20),
  arq_foto              varchar(400),
  dt_nasc               date,
  nr_servicos  		    int,
  dq_espartech          boolean,
  ar_atuacao 			varchar(60),
  ds_licencas			varchar(100),
  foreign key (id_tipo_serv) references tb_tipo_serv (id_tipo_serv)
);

create table tb_cliente (
  id_cliente            int primary key auto_increment,
  nm_cliente            varchar(100),
  ds_email              varchar(100),
  ds_senha              varchar(100),
  ds_cpf                varchar(14),
  arq_foto              varchar(400),
  ds_telefone           varchar(20),
  dt_nasc            	date
);

create table  tb_comentario_prof(
  id_comentario         int primary key auto_increment,
  id_cliente         	int,
  id_profissional   	int,
  ds_comentario      	varchar(200),
  dt_comentario      	datetime,
  foreign key (id_cliente) references tb_cliente (id_cliente),
  foreign key (id_profissional) references tb_profissional (id_profissional)
);

create table tb_avaliacao (
  id_avaliacao			int primary key auto_increment,
  id_cliente 			int,
  id_profissional       int,
  vl_avaliacao          decimal(10,2),
  foreign key (id_cliente) references tb_cliente (id_cliente),
  foreign key (id_profissional) references tb_profissional (id_profissional)
);

create table tb_pagamento  (
  id_pagamento         int primary key auto_increment,
  nm_tp_pagt              varchar(100) 
);

create table tb_endereco  (
  id_endereco         int primary key auto_increment,
  ds_endereco              varchar(150) 
);


create table tb_servico (
  id_servico			int primary key auto_increment,
  id_cliente			int,
  id_profissional		int,
  id_tipo_serv			int,
  id_pagamento			int,
  ds_logradouro   varchar(200),
  ds_complemento  varchar(100),
  ds_bairro       varchar(100),
  ds_cidade       varchar(100),
  ds_uf           varchar(50),
  dt_limite				date,
  vl_pagt				decimal(10,2),
  ds_carga_hr			varchar(100),
  ds_detalhes			varchar(200),
  ds_situacao			varchar(20),
  foreign key (id_cliente) references tb_cliente (id_cliente),
  foreign key (id_profissional) references tb_profissional (id_profissional),
  foreign key (id_tipo_serv) references tb_tipo_serv (id_tipo_serv),
  foreign key (id_pagamento) references tb_pagamento (id_pagamento),
  foreign key (id_endereco) references tb_endereco (id_endereco)
);