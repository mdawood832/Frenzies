require("dotenv").config()
const mongoose = require("mongoose")

// dotenv.config()
const mongoString = process.env.MONGODB_URI
console.log(mongoString)
mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log(`Connected to MongoDB database.`)
})

module.exports = {
    Quote: require('./quotes')
}


