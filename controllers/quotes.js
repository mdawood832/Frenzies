const express = require('express')
const router = express.Router()
const Quote = require('../models/quotes.js')

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

// SEED ROUTE
// router.get('/seed', (req, res) => {
// 	Quote.create(
// 		[
// 			{
// 				title: 'Curios cat',
// 				author: 'Ben Jonson',
//                 body: 'Curiosity killed the cat, but satisfaction brought it back.'
// 			},
// 			{
// 				title: 'VINCENT',
// 				author: 'Vincent van Gogh',
//                 body: 'It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.'
// 			},
// 			{
// 				title: 'Rain',
// 				author: 'Dolly Parton',
//                 body: 'The way I see it, if you want the rainbow, you gotta put with the rain'
// 			},
//             {
//                 title: 'Annoying',
// 				author: 'Tyler the Creator',
//                 body: 'Im a really, really, smart, multi-talented almost genius, whos very annoying'
//             }
// 		],
// 		(err, data) => {
// 			res.redirect('/frenzies');
// 		}
// 	);
// });

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