import express from "express"

const router = express.Router()

router.post("/auth/register", (req, res) => {
  res.json({ message: "Register works!", user: req.body })
})

export default router