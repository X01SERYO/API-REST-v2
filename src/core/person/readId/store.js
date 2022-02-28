import db  from "./../../../infra/db";

const readId = async (document) => {
  const columns = 'fecha, cedula, nombre, apellido, direccion, telefono'
  const nameFunction = "public.read_id_user";
  const params = "$1";
  const args = [document];
  const [rows] = await db.client.callFunction(columns, nameFunction, params, args);

  return rows;
};

export default { readId };