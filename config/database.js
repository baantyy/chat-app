const mongoose = require("mongoose")
const { db_url } = require("./config")
mongoose.Promise = global.Promise

mongoose.connect(db_url.dev,{
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