// require("dotenv").config()
// 
const express = require('express')
const app = express()
const PORT  = 3000
// app.set("view engine" , "ejs")
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
const {render} = require('ejs')

// IMPORT ROUTER 
const quotesController = require('./controllers/quotes.js')


// MONGOOSE 
const mongoose = require('mongoose');

// MONGOOSE CONNECT 
mongoose.connect('mongodb://127.0.0.1:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// MIDDLEWARE
app.use('/public', express.static('public'));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// goes to router '/frenzies' plus whatever routes are inside the controller 
app.use('/frenzies' , quotesController)



// #############################################################
// LISTENING 
// #############################################################

// PORT
app.listen(PORT, (req,res) => {
    console.log(`listening to sweet beats on ${PORT}`)
})

