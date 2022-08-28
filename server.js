const express = require('express')
const app = express()
const PORT  = 3000
const Quote = require('./models/quotes.js')
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
const {render} = require('ejs')

// MONGOOSE 
const mongoose = require('mongoose');

// MONGOOSE CONNECT 
mongoose.connect('mongodb://127.0.0.1:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// #############################################################
// ROUTES
// #############################################################

// INDEX ROUTE  
app.get('/frenzies' , (req, res) => {
    Quote.find({} , (error, allQuotes) => {
        res.render('index.ejs' , {
            quotes: allQuotes
        })
    })
})

// SEED
app.get('/frenzies/seed', (req, res) => {
	Quote.create(
		[
			{
				title: 'grapefruit',
				author: 'pink',
                body: ''
			},
			{
				title: 'grapefruit',
				author: 'pink',
                body: ''
			},
			{
				title: 'grapefruit',
				author: 'pink',
                body: ''
			}
		],
		(err, data) => {
			res.redirect('/frenzies');
		}
	);
});



// ABOUT ROUTE 
app.get('/frenzies/about' , (req,res) => {
    res.render('about.ejs')
}
)

// NEW ROUTE 
app.get('/frenzies/new' , (req,res) => {
    res.render('new.ejs')
})

// POST ROUTE 
app.post('/frenzies', (req, res)=>{
    Quote.create(req.body, (error, createdQuote)=>{
        if (error){
        	console.log(error);
        	res.send(error);
        }
        else{
	        res.send(createdQuote);
            // res.redirect('/frenzies')
        }
    }
)});

// SHOW ROUTE 
app.get('/frenzies/:id', (req, res)=>{
    Quote.findById(req.params.id, (err, foundQuote)=>{
        res.render('show.ejs' , {
            quote: foundQuote
        })
    });
});

// DELETE ROUTE 
app.delete('/frenzies/:id', (req, res)=>{
    Quote.findByIdAndRemove(req.params.id , (err, data) => {
        res.redirect('/frenzies')
    })
})



// #############################################################
// LISTENING 
// #############################################################

// PORT
app.listen(PORT, (req,res) => {
    console.log(`listening to sweet beats on ${PORT}`)
})

