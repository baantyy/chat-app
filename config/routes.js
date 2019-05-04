const express = require("express")
const router = express.Router()

const { userRouter } = require('../app/controllers/UserController')
const { chatRouter } = require('../app/controllers/ChatController')

router.use("/users", userRouter)
router.use("/chat", chatRouter)

module.exports = {
    routes: router
}