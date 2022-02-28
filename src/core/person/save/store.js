import db from "../../../infra/db";

const save = async (date, document, name, lastName, address, phone) => {
  const columns = "fecha, cedula, nombre, apellido, direccion, telefono";
  const nameFunction = "public.insert_user";
  const params = "$1 $2 $3 $4 $5 $6";
  const args = [date, document, name, lastName, address, phone];
  const [rows] = await db.client.callFunction(columns, nameFunction, params, args);

  return rows;
};

export default { save };
