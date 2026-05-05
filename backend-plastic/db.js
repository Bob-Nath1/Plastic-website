
import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
const { Pool } = pg;

console.log("DB FILE LOADED");

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("TYPE:", typeof process.env.DATABASE_URL);

// Create connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
// Test the connection when the server starts
pool.connect()
  .then((client) => {
    console.log("✅ Successfully connected to PostgreSQL Database");
    client.release();
  })
  .catch((err) => {
    console.error("❌ Failed to connect to PostgreSQL:", err.message);
  });

export default pool;




