import express from 'express'
import { pool } from '../db.js'

const router = express.Router()

router.get('/admin/users', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        u.id,
        u.name,
        COALESCE(SUM(c.kg), 0) AS "totalKg"
      FROM users u
      LEFT JOIN collections c ON u.id = c.user_id
      GROUP BY u.id
      ORDER BY u.id
    `)

    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to load users' })
  }
  })

  
router.post('/admin/users/:id/approve-reward', async (req, res) => {
  try {
    const userId = req.params.id

    const result = await pool.query(
      `UPDATE rewards
       SET status = 'approved'
       WHERE user_id = $1 AND status = 'pending'
       RETURNING *`,
      [userId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No pending reward found' })
    }

    res.json({
      message: 'Reward approved',
      reward: result.rows[0]
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to approve reward' })
  }
})
})

export default router