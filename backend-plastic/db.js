import pkg from 'pg'
const { Pool } = pkg

console.log("DB FILE LOADED")

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})