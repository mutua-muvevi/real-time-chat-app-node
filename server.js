// server/index.js
const mongoose = require("mongoose")
const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const PORT = process.env.PORT || 3001

dotenv.config({path: `./config.env`})
const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http)
app.use(cors())
app.use(express.json({limit: "10kb"}))

const dataBase = process.env.DB

const connectDB = async (dataBase) => {
 try {
  await mongoose.connect(dataBase, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  })
  console.log(`The Database is connected ....`)
 } catch (error) {
  console.log(error.message)
  process.exit(1)
 }
}

connectDB(dataBase)

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./client/build")))

const chatRoute = require("./routes/chatRoute")

app.use("/chatApp/v1/text", chatRoute)

app.get("/api", (req, res) => {
 res.json({message: "Hello from server!"})
})

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
 res.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
})

io.on("connection", () => {
 console.log("a user is connected")
})

app.listen(PORT, () => {
 console.log(`Server listening on ${PORT}`)
})
