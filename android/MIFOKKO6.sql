/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     30/09/2020 11:08:00 p. m.                    */
/*==============================================================*/


drop table if exists ALCANCE_TRABAJO;

drop table if exists CALIFICACION;

drop table if exists CIUDAD;

drop table if exists CONFIGURACION_GENERAL;

drop table if exists DEPARTAMENTOS;

drop table if exists EMPRESA_PS;

drop table if exists EMPRESA_PS_SECTOR;

drop table if exists GESTION_FACTURACION;

drop table if exists LOG;

drop table if exists MOTIVOS_RECHAZO;

drop table if exists OFERTAS;

drop table if exists PAIS;

drop table if exists ROLES;

drop table if exists SECTOR;

drop table if exists SERVICIOS;

drop table if exists TIPO_OPERACION;

drop table if exists USUARIO;

/*==============================================================*/
/* Table: ALCANCE_TRABAJO                                       */
/*==============================================================*/
create table ALCANCE_TRABAJO
(
   ID_ALCANCE_TRABAJO   int not null auto_increment,
   ID_CIUDAD_ALCANCE    int not null,
   ID_CIUDAD_EMPRESA_PS int not null,
   DIRECCION_SEDE       varchar(40),
   LONGITUD             bigint,
   LATITUD              bigint,
   primary key (ID_ALCANCE_TRABAJO)
);

/*==============================================================*/
/* Table: CALIFICACION                                          */
/*==============================================================*/
create table CALIFICACION
(
   ID_CALIFICACION      int not null auto_increment,
   ID_USUARIO           int,
   ID_SERVICIO          int,
   ID_OFERTAS           int,
   FECHA_HR_COMENTARIO  datetime,
   FECHA_HORA_CALIFICACION datetime,
   COMENTARIO           varchar(200) not null,
   CALIFICACION         int not null,
   ESTADO               int not null,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_CALIFICACION)
);

/*==============================================================*/
/* Table: CIUDAD                                                */
/*==============================================================*/
create table CIUDAD
(
   ID_CIUDAD            int not null auto_increment,
   ID_DEPARTAMENTO      int,
   NOMBRE_CIUDAD        varchar(30) not null,
   ESTADO               int not null,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_CIUDAD)
);

/*==============================================================*/
/* Table: CONFIGURACION_GENERAL                                 */
/*==============================================================*/
create table CONFIGURACION_GENERAL
(
   ID_CONFIGURACION_GENERAL int not null auto_increment,
   ETIQUETA             varchar(30) not null,
   DESCRIPCION          varchar(200) not null,
   VALOR                varchar(500) not null,
   ESTADO               int not null,
   primary key (ID_CONFIGURACION_GENERAL)
);

/*==============================================================*/
/* Table: DEPARTAMENTOS                                         */
/*==============================================================*/
create table DEPARTAMENTOS
(
   ID_DEPARTAMENTO      int not null auto_increment,
   ID_PAIS              int,
   NOMBRE_DEPARTAMENTO  varchar(30) not null,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_DEPARTAMENTO)
);

/*==============================================================*/
/* Table: EMPRESA_PS                                            */
/*==============================================================*/
create table EMPRESA_PS
(
   ID_EMPRESA_PS        int not null auto_increment,
   ID_CIUDAD            int,
   N_IDENTIFICACION     bigint not null,
   RAZON_SOCIAL         varchar(40) not null,
   TIPO_CLIENTE         varchar(40) not null,
   DIRECCION            varchar(40) not null,
   TELEFONO             bigint not null,
   IMAGEN_LOGO          varchar(70),
   HORARIOS_ATENCION    varchar(70) not null,
   DESCRIPCION_SOLICITUD varchar(200),
   PALABRAS_CLAVES      varchar(200),
   ENLACE_PAGINA_WEB    varchar(200),
   ENLACE_YOUTUBE       varchar(200),
   ENLACE_FACEBOOK      varchar(200),
   ENLACE_WHATSAPP      varchar(200),
   ENLACE_INSTAGRAM     varchar(200),
   ENLACE_TWITER_       varchar(200),
   ENLACE_TIKTOK        varchar(200),
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_EMPRESA_PS)
);

/*==============================================================*/
/* Table: EMPRESA_PS_SECTOR                                     */
/*==============================================================*/
create table EMPRESA_PS_SECTOR
(
   ID_SECTOR            int not null,
   ID_EMPRESA_PS        int not null,
   primary key (ID_SECTOR, ID_EMPRESA_PS)
);

/*==============================================================*/
/* Table: GESTION_FACTURACION                                   */
/*==============================================================*/
create table GESTION_FACTURACION
(
   ID_FACTURACION       int not null auto_increment,
   ID_EMPRESA_PS        int,
   FECHA_INICIO_VIGENCIA date not null,
   FECHA_FIN_VIGENCIA   date not null,
   VALOR_COBRADO        int not null,
   FORMA_PAGO           varchar(30),
   FECHA_PAGO           date,
   NUMERO_CUOTAS        int,
   VALOR_CUOTAS         int,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_FACTURACION)
);

/*==============================================================*/
/* Table: LOG                                                   */
/*==============================================================*/
create table LOG
(
   ID_LOG               int not null auto_increment,
   ID_TIPO_OPERACION    int,
   ID_USUARIO           int,
   USUARIO_SESION       int,
   DESCRIPCION_LOG      varchar(200),
   FECHA_LOG            datetime not null,
   ORIGEN_CONEXION_     varchar(60) not null,
   primary key (ID_LOG)
);

/*==============================================================*/
/* Table: MOTIVOS_RECHAZO                                       */
/*==============================================================*/
create table MOTIVOS_RECHAZO
(
   ID_MOTIVO_RECHAZO    int not null auto_increment,
   MOTIVO_RECHAZO       varchar(30) not null,
   primary key (ID_MOTIVO_RECHAZO)
);

/*==============================================================*/
/* Table: OFERTAS                                               */
/*==============================================================*/
create table OFERTAS
(
   ID_OFERTAS           int not null auto_increment,
   ID_EMPRESA_PS        int,
   VIGENCIA             varchar(20) not null,
   FECHA_HR_INICIO      datetime not null,
   FECHA_HR_FIN         datetime not null,
   DESCRIPCION_OFERTA   varchar(200),
   IMAGEN_OFERTA        varchar(200) not null,
   VALOR_OFERTA         int not null,
   ESTADO               int not null,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_OFERTAS)
);

/*==============================================================*/
/* Table: PAIS                                                  */
/*==============================================================*/
create table PAIS
(
   ID_PAIS              int not null auto_increment,
   NOMBRE               varchar(20) not null,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_PAIS)
);

/*==============================================================*/
/* Table: ROLES                                                 */
/*==============================================================*/
create table ROLES
(
   ID_ROLES             int not null auto_increment,
   NOMBRE_ROL           varchar(30) not null,
   ESTADO               int not null,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_ROLES)
);

/*==============================================================*/
/* Table: SECTOR                                                */
/*==============================================================*/
create table SECTOR
(
   ID_SECTOR            int not null auto_increment,
   NOMBRE_SECTOR        varchar(30) not null,
   primary key (ID_SECTOR)
);

/*==============================================================*/
/* Table: SERVICIOS                                             */
/*==============================================================*/
create table SERVICIOS
(
   ID_SERVICIO          int not null auto_increment,
   ID_CALIFICACION      int,
   ID_MOTIVO_RECHAZO    int,
   ID_OFERTAS           int,
   DESCRIPCION_SOLICITUD varchar(200),
   RESPUESTA_SOLICITUD  varchar(200),
   FECHA_SOLICITUD_SERVICIO date,
   FECHA_INICIO_SERVICIO date,
   FECHA_FIN_SERVICIO   date,
   FECHA_RESPUESTA      date,
   FECHA_MOTIVO_RECHAZO date,
   ESTADO               int not null,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   ID_USUARIO_CLIENTE   int not null,
   ID_USUARIO_EMPRESA_PS int not null,
   primary key (ID_SERVICIO)
);

/*==============================================================*/
/* Table: TIPO_OPERACION                                        */
/*==============================================================*/
create table TIPO_OPERACION
(
   ID_TIPO_OPERACION    int not null auto_increment,
   NOMBRE_OPERACION     varchar(30) not null,
   DESCRIPCION_OPERACION varchar(200),
   primary key (ID_TIPO_OPERACION)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   ID_USUARIO           int not null auto_increment,
   ID_ROLES             int,
   NOMBRE_USUARIO       varchar(40) not null,
   USUARIO              varchar(20) not null,
   CLAVE                varchar(20) not null,
   TIPO_USUARIO         varchar(20) not null,
   ESTADO               int not null,
   CREADO_POR           varchar(30) not null,
   FECHA_CREACION       datetime not null,
   MODIFICADO_POR       varchar(30),
   FECHA_MODIFICACION   datetime,
   primary key (ID_USUARIO)
);

alter table CALIFICACION add constraint FK_OFERTAS_CALIFICACION foreign key (ID_OFERTAS)
      references OFERTAS (ID_OFERTAS) on delete restrict on update restrict;

alter table CALIFICACION add constraint FK_SERVICIOS_CALIFICACION2 foreign key (ID_SERVICIO)
      references SERVICIOS (ID_SERVICIO) on delete restrict on update restrict;

alter table CALIFICACION add constraint FK_USUARIO_COMENTARIOS foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO) on delete restrict on update restrict;

alter table CIUDAD add constraint FK_CIUDAD_DEPARTAMENTO foreign key (ID_DEPARTAMENTO)
      references DEPARTAMENTOS (ID_DEPARTAMENTO) on delete restrict on update restrict;

alter table DEPARTAMENTOS add constraint FK_DEPARTAMENTO_PAIS foreign key (ID_PAIS)
      references PAIS (ID_PAIS) on delete restrict on update restrict;

alter table EMPRESA_PS add constraint FK_EMPRESA_PS_CIUDAD foreign key (ID_CIUDAD)
      references CIUDAD (ID_CIUDAD) on delete restrict on update restrict;

alter table EMPRESA_PS_SECTOR add constraint FK_EMPRESA_PS_SECTOR foreign key (ID_SECTOR)
      references SECTOR (ID_SECTOR) on delete restrict on update restrict;

alter table EMPRESA_PS_SECTOR add constraint FK_EMPRESA_PS_SECTOR2 foreign key (ID_EMPRESA_PS)
      references EMPRESA_PS (ID_EMPRESA_PS) on delete restrict on update restrict;

alter table GESTION_FACTURACION add constraint FK_EMPRESA_GESTION_FACTURACION foreign key (ID_EMPRESA_PS)
      references EMPRESA_PS (ID_EMPRESA_PS) on delete restrict on update restrict;

alter table LOG add constraint FK_LOG_TIPO_OPERACION foreign key (ID_TIPO_OPERACION)
      references TIPO_OPERACION (ID_TIPO_OPERACION) on delete restrict on update restrict;

alter table LOG add constraint FK_LOG_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO) on delete restrict on update restrict;

alter table OFERTAS add constraint FK_EMPRESA_PS_OFERTAS foreign key (ID_EMPRESA_PS)
      references EMPRESA_PS (ID_EMPRESA_PS) on delete restrict on update restrict;

alter table SERVICIOS add constraint FK_OFERTAS_SERVICIOS foreign key (ID_OFERTAS)
      references OFERTAS (ID_OFERTAS) on delete restrict on update restrict;

alter table SERVICIOS add constraint FK_SERVICIOS_CALIFICACION foreign key (ID_CALIFICACION)
      references CALIFICACION (ID_CALIFICACION) on delete restrict on update restrict;

alter table SERVICIOS add constraint FK_SERVICIOS_MOTIVO_RECHAZO foreign key (ID_MOTIVO_RECHAZO)
      references MOTIVOS_RECHAZO (ID_MOTIVO_RECHAZO) on delete restrict on update restrict;

alter table USUARIO add constraint FK_USUARIO_ROLES foreign key (ID_ROLES)
      references ROLES (ID_ROLES) on delete restrict on update restrict;

