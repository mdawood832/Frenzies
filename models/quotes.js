const mongoose = require('mongoose') // require mongoose
// const { values } = require('./seed')
const Schema = mongoose.Schema

// SCHEMA   
const quoteSchema = new Schema({
    title: { type: String},
    author: { type: String},
    publishDate: { type: Date, default: Date.now }, 
    body: { type: String}, 

}, { timestamps: true })

// MODEL 
const Quote = mongoose.model('Quote', quoteSchema)

// EXPORT   
module.exports = Quote


