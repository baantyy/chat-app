const express = require("express")
const _ = require("lodash")
const router = express.Router()

const { User } = require("../models/User")
const { Chat } = require("../models/Chat")

const { userAuth } = require("../middlewares/auth")

//localhost:3005/chat/users
router.get("/users", userAuth, function(req,res){
    User.find().select('_id fullname username')
        .then(function(users){
            res.send(users)
        })
        .catch(function(err){
            res.send(err)
        })
})

//localhost:3005/chat/messages/:id
router.get("/messages/:id", userAuth, function(req,res){
    const to = req.params.id
    const from = req.user._id
    Chat.find({$or:[{from, to},{to: from, from: to}]})
        .then(function(messages){
            res.send(messages)
        })
        .catch(function(err){
            res.send(err)
        })
})

//localhost:3005/chat/messages
router.post("/messages", userAuth, function(req,res){
    const body = _.pick(req.body,["to", "message"])
    body.from = req.user._id
    const chat = new Chat(body)
    chat.save()
        .then(function(chat){
            res.send(chat)
        })
        .catch(function(err){
            res.send(err)
        })
})

module.exports = {
    chatRouter: router
}