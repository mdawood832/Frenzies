const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()
const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@maryamscluster.ybkj2jb.mongodb.net/Frenzies?retryWrites=true&w=majority`
mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})