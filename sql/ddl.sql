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