import { Pool } from "pg";

export const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  // ssl: {
  //   rejectUnauthorized: false,
  // }
});

