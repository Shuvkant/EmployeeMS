import express from 'express'
import cars from 'cars'
import { adminRouter } from './Routes/AdminRoute.js'

const app = express()
app.use(
  cars({
    origin: ['http://localhost:5173'],
    methods:['GET', 'POST', 'PUT'],
    Credential
  })
)
app.use(express.json())
app.use('/auth', adminRouter)

app.listen(3000, () => {
  console.log('Server is running so fast')
})
