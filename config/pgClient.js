import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
console.log(process.env.POSTGRES_URL);

pool.on("error", (err) => console.error(err));
pool.on("connect", () => console.log("connected to the database"));
export default pool;
