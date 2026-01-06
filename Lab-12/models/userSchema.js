const mongoose = require('mongoose')
const { type } = require('node:os')

const userSchema = new mongoose.Schema(
    {
        name:String,
        age:Number,
        Email:String,
        CreatedAt:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports = mongoose.model("users",userSchema)