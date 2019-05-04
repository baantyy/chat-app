const mongoose = require("mongoose")
mongoose.Promise = global.Promise
//const db = 'mongodb://localhost:27017/chat-app'
const db = 'mongodb://banty:qwe123@ds149706.mlab.com:49706/heroku_q9zqqjvz'
mongoose.connect(db,{
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(function(){
        console.log("DB is connected")
    })
    .catch(function(){
        console.log("DB is not connected")
    })
module.exports = {
    mongoose
}