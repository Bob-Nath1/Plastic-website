import express from 'express'
import { pool } from '../db.js'

const router = express.Router()

router.get('/reports/summary', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        COUNT(*) AS "totalCollections",
        COALESCE(SUM(kg), 0) AS "totalKg"
      FROM collections
    `)

    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to load report' })
  }
})

export default router