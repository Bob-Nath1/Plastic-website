import express from "express";
import pool from '../db.js';

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ 
      error: "Name, email and password are required" 
    });
  }
  
  try {
    const result = await pool.query(
      `INSERT INTO users (name, email, password, role) 
       VALUES ($1, $2, $3, 'user') 
       RETURNING id, name, email, role`,
      [name, email, password]
    );

    const newUser = result.rows[0];

    console.log(`✅ New user registered: ${newUser.email}`);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: newUser
    });

  } catch (err) {
    console.error("Register error:", err);

    if (err.code === '23505') {
      return res.status(409).json({ 
        error: "An account with this email already exists" 
      });
    }

    res.status(500).json({ 
      error: "Failed to create account. Please try again." 
    });
  }
});

export default router;