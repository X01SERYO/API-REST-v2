-- Functions
--CREATE OR REPLACE FUNCTION notification.fn_find_template(required_template_name TEXT, required_project_id INTEGER, canal TEXT)
--    RETURNS SETOF notification.templates
--AS $$
--    SELECT
--        U.*
--    FROM notification.templates AS U
--    WHERE U.name = required_template_name
--        AND U.project_id = required_project_id
--        AND U.canal = canal;
--$$
--LANGUAGE SQL;

CREATE OR REPLACE FUNCTION shema_test.insert_user(required_date date, required_document character varying, required_name character varying, required_last_name character varying, required_address character varying, required_phone character varying)
 RETURNS void
 LANGUAGE sql
AS $function$
	INSERT INTO shema_test.user (fecha,cedula,nombre,apellido,direccion,telefono)
		VALUES (required_date,required_document,required_name,required_last_name,required_address ,required_phone);

$function$
;