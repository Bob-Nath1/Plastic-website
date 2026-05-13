import express from 'express'
import pool from '../db.js'

const router = express.Router()

router.get('/collections/:userId', async (req, res) => {
  try {
    const { userId } = req.params

    const result = await pool.query(
      `
      SELECT *
      FROM collections
      WHERE user_id = $1
      ORDER BY date DESC
      `
      ,
      [userId]
    )

    res.json(result.rows)

  } catch (err) {
    console.error(err)

    res.status(500).json({
      error: 'Failed to load collections'
    })
  }
})

export default router