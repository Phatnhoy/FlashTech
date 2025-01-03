require("dotenv").config();

const express = require('express')
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")
const app = express()
const port = 5000

// for kill port 3000: npx kill-port 3000 

app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

const apiRoutes = require("./routes/apiRoutes")

app.get('/', async (req, res, next) => {
  res.json({ message: "API running..." })
})

//mongodb connection
const connectDB = require("./config/db")
const { purge } = require('./routes/productRoutes')
connectDB();

app.use('/api', apiRoutes)

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }
  res.status(500).json({
    message: "Something went wrong. Please try again later.", // Thông báo thân thiện
  });
})

// app.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "development") {
//     res.status(500).json({
//       message: error.message,
//       stack: error.stack
//     })
//   } else {
//     res.status(500).json({
//       message: error.message,
//     })
//   }
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
