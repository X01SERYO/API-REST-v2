import db  from "../../../infra/db";

const readAll= async () => {
  const columns = 'fecha, cedula, nombre, apellido, direccion, telefono'
  const nameFunction = "public.read_all_clients";
  const rows = await db.client.callFunction(columns, nameFunction, '', '');

  return rows;
};

export default { readAll };