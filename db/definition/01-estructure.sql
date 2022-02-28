-- Schema
CREATE SCHEMA shema_test AUTHORIZATION postgres;

-- Tables
CREATE TABLE shema_test.user (
    id SERIAL,
	fecha date NULL,
	cedula varchar(15) NULL,
	nombre varchar(45) NULL,
	apellido varchar(45) NULL,
	direccion varchar(45) NULL,
	telefono varchar(15) NULL,
	created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50) NOT NULL,
	updated_at timestamp NULL,
	updated_by varchar(50) NULL,
	is_active bool NOT NULL DEFAULT true,
	deleted bool NOT NULL DEFAULT false
);