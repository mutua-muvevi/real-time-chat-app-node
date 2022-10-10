const express = require("express")
const Chat = require("../model/chatModel")

const router = express.Router()

router.get("/get-all-message", async (req, res) => {
 try {
  let chats = await Chat.find()

  res.status(200).json({
   message: "success",
   chats,
  })
 } catch (error) {
  res.status(500).json({
   message: `Internal Server Error ${error.message}`,
  })
 }
})

router.post("/post-a-message", async (req, res) => {
 try {
  const text = await Chat.create({
   name: req.body.name,
   message: req.body.message,
  })

  res.status(200).json({
   message: "success",
   text,
  })
 } catch (error) {
  res.status(500).json({
   message: `Internal Server Error ${error.message}`,
  })
 }
})

module.exports = router
