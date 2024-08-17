/**
 * Represents a connection pool to a PostgreSQL database.
 * 
 * The `pool` object is an instance of the `Pool` class from the "pg" module.
 * It is used to manage connections to the database and execute queries.
 * 
 * @remarks
 * The connection pool is created using the configuration options specified in the `.env` file.
 * The `host`, `port`, `database`, `user`, and `password` properties are read from the environment variables.
 * 
 * @example
 * ```typescript
 * import pool from "./utils/postgres";
 * 
 * // Use the pool to execute queries
 * pool.query("SELECT * FROM users")
 *     .then((result) => {
 *         console.log(result.rows);
 *     })
 *     .catch((error) => {
 *         console.error(error);
 *     });
 * ```
 ***/

import { Pool } from "pg";
import dotenv from "dotenv";


dotenv.config();

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT || '5432', 10),
    database: process.env.PG_DATABASE,
    
    
    
});

export default pool;