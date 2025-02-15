require("dotenv").config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001;
app.set("view engine" , "ejs")
const methodOverride = require('method-override')
// app.use(methodOverride('_method'))
const {render} = require('ejs')

// IMPORT ROUTER 
const quotesController = require('./controllers/quotes.js')



// MONGOOSE 
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// MONGOOSE CONNECT 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// MIDDLEWARE
app.use('/public', express.static('public'));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


// goes to router '/frenzies' plus whatever routes are inside the controller 
app.use('/frenzies' , quotesController)

// HOME ROUTE 
// app.get('/' , (req,res) => {
//     res.render('index.ejs')
// })

// #############################################################
// LISTENING 
// #############################################################

// PORT
app.listen(PORT, (req,res) => {
    console.log(`App is live at http://localhost:${PORT}/`)
})

