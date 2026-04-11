
import express from 'express'
import { pool } from '../db.js'

const router = express.Router()

router.post('/pickups', async (req, res) => {
  try {
    const { userId, date, note } = req.body

    const result = await pool.query(
      `INSERT INTO pickups (user_id, date, note)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [userId, date, note]
    )

    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to request pickup' })
  }
})

export default router
