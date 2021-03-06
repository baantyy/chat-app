const express = require("express")
const cors = require('cors')
const path = require('path')
const socket = require("socket.io")

const { mongoose } = require('./config/database')
const { routes } = require('./config/routes')

const app = express()
const port = process.env.PORT || 3005

app.use(express.json())
app.use(cors())
app.use("/api",routes)
//app.use(express.static("public"))

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const server = app.listen(port, function(){
    console.log("Listening on port " + port)
})

const io = socket(server)
const users = {}

function check_key(data){
	var value = null
	for(var key in users){
        if(key == data){
            value = users[key]
        }
    }
	return value
}

io.on("connection", (socket) => {
    console.log('socket id', socket.id)

    //add new user
    socket.on('addUser', (username) => {
		socket.username = username
        users[username] = socket.id
        console.log('addUser', users)
    })

    //send message
    socket.on("sendMessage", (data) => {
        const userSocketId = check_key(data.to)
        if(userSocketId){            
            io.in(userSocketId).emit("newMessage", data)
        }
    })

    //remove user
    // socket.on('logout', function(username){
    //     delete users[username]
    // })

    //typing
    socket.on("typing", (data) => {
        const userSocketId = check_key(data.to)
        if(userSocketId){
            io.in(userSocketId).emit("showTyping", data)
        }
    })
})