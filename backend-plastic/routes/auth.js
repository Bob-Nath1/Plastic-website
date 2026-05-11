import express from "express";
import pool from '../db.js';

const router = express.Router();

router.post("/register", async (req, res) => {
console.log("Route hit")

  const { name, email, password } = req.body;
    console.log("📩 REQUEST BODY:", req.body);


  if (!name || !email || !password) {
    return res.status(400).json({ 
      error: "Name, email and password are required" 
    });
  }
  
  try {

    // CHECK DATABASE CONTEXT
    const dbInfo = await pool.query(`
      SELECT current_database() AS db,
             current_schema() AS schema;
    `);

    console.log("🧠 DB CONTEXT:", dbInfo.rows[0]);

    const result = await pool.query(
      `INSERT INTO users (name, email, password, role) 
       VALUES ($1, $2, $3, 'user') 
       RETURNING id, name, email, role`,
      [name, email, password]
    );

    const newUser = result.rows[0];

    console.log(`✅ New user registered: ${newUser.email}`);

     // CHECK ALL USERS
    const allUsers = await pool.query(`
      SELECT * FROM users
    `);

    console.log("📊 ALL USERS:", allUsers.rows);

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("🔥 LOGIN ROUTE HIT");
  console.log("📩 LOGIN BODY:", req.body);

  try {
    const result = await pool.query(
      `SELECT id, name, email, role, password
       FROM users
       WHERE email = $1`,
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        error: "Invalid email or password"
      });
    }

    console.log("✅ LOGIN SUCCESS:", user.email);

    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);

    res.status(500).json({
      error: "Login failed"
    });
  }
});

export default router;