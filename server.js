const express = require('express')
const app = express()
const PORT  = 3000

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// INDEX ROUTE  
app.get('/frenzies' , (req, res) => {
    res.render('index.ejs')
})

// ABOUT ROUTE 
app.get('/frenzies/about' , (req,res) => {
    res.render('about.ejs')
}
)

// PORT
app.listen(PORT, (req,res) => {
    console.log(`listening to sweet beats on ${PORT}`)
})
