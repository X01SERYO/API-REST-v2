import pkg from "pg";

const { Pool } = pkg;

const DATABASE_ERROR_TITLE = "A database error was detected";

const pool = new Pool();

const query = async (sql, args) => {
  try {
    const { rows } = await pool.query(sql, args);

    return rows;
  } catch (error) {
    console.log(error);
  }
};

const callFunction = async (columns, name, params, args) => {
  try {
    const sql = `SELECT ${columns} FROM ${name}(${params})`;
    const { rows } = await pool.query(sql, args);

    return rows;
  } catch (error) {
    console.log(error);
  }
};

export default { query, callFunction };
