const express = require('express')
const router = express.Router()
// const Quote = require('../models/quotes.js') 
const Quote = require('../models/quotes') 

// const db = require('../models' )

// #############################################################
// ROUTES
// #############################################################



// INDEX ROUTE  
router.get('/' , (req, res) => {
    Quote.find({} , (error, allQuotes) => {
        res.render('index.ejs' , {
            quotes: allQuotes
        })
    })
})

// ABOUT ROUTE 
router.get('/about' , (req,res) => {
    res.render('about.ejs')
}
)

// NEW ROUTE 
router.get('/new' , (req,res) => {
    res.render('new.ejs')
})



// POST ROUTE 
router.post('/', (req, res)=>{
    Quote.create(req.body, (error, createdQuote)=>{
        if (error){
        	console.log(error);
        	res.send(error);
        }
        else{
	        // res.send(createdQuote);
            res.redirect('/frenzies')
        }
    }
)});

// SHOW ROUTE 
router.get('/:id', (req, res)=>{
    Quote.findById(req.params.id, (err, foundQuote)=>{
        res.render('show.ejs' , {
            quote: foundQuote
        })
    });
});

// DELETE ROUTE 
router.delete('/:id', (req, res)=>{
    Quote.findByIdAndRemove(req.params.id , (err, data) => {
        res.redirect('/frenzies')
    })
})

// EDIT ROUTE 
router.get('/:id/edit', (req, res)=>{
    Quote.findById(req.params.id, (err, foundQuote)=>{
        res.render(
    		'edit.ejs',
    		{
    			quote:foundQuote
    		}
    	)
    })
})

// PUT ROUTE 
router.put('/:id', (req, res)=>{
    Quote.findByIdAndUpdate(req.params.id , req.body ,{new:true} , (err, updatedModel) => {
        // res.send(updatedModel)
        res.redirect('/frenzies')
    })
})


module.exports = router;