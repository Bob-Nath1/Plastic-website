import express from 'express'
import cors from 'cors'

import pickupRoutes from './routes/pickups.js'
import adminRoutes from './routes/admin.js'
import reportRoutes from './routes/reports.js'
import authRoutes from './routes/auth.js'


const app = express()

// ✅ CORS (FIXES YOUR MAIN ERROR)
app.use(cors({
  origin: [
    "https://funny-tulumba-53a5a5.netlify.app", // your Netlify site
    "http://localhost:5173"
  ],
  credentials: true
}))

// ✅ middleware
app.use(express.json())

// ✅ routes
app.use('/api', authRoutes)
app.use('/api', pickupRoutes)
app.use('/api', adminRoutes)
app.use('/api', reportRoutes)

// ✅ test route (optional)
app.get('/', (req, res) => {
  res.send('API is running 🚀')
})

// ✅ use Render port
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})