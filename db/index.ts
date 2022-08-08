require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool();

const query: object = {
  query: (text: string, params: string, callback: Function) => {
    return pool.query(text, params, callback);
  },
};

export { query };
