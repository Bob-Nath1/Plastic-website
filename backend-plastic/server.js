import express from 'express'
import pickupRoutes from './routes/pickups.js'
import adminRoutes from './routes/admin.js'
import reportRoutes from './routes/reports.js'

const app = express()
app.use(express.json())

app.use('/api', pickupRoutes)
app.use('/api', adminRoutes)
app.use('/api', reportRoutes)

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
