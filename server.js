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
app.use('/public', express.static('public'));
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
				title: 'Curiosity killed the cat',
				author: 'Ben Jonson',
                body: 'Curiosity killed the cat, but satisfaction brought it back.'
			},
			{
				title: 'It is good to love many things',
				author: 'Vincent van Gogh',
                body: 'It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.'
			},
			{
				title: 'Rain',
				author: 'Dolly Parton',
                body: 'The way I see it, if you want the rainbow, you gotta put with the rain'
			},
            {
                title: 'Annoying',
				author: 'Tyler the Creator',
                body: 'Im a really, really, smart, multi-talented almost genius, whos very annoying'
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
	        // res.send(createdQuote);
            res.redirect('/frenzies')
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

// EDIT ROUTE 
app.get('/frenzies/:id/edit', (req, res)=>{
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
app.put('/frenzies/:id', (req, res)=>{
    Quote.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        // res.send(updatedModel)
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

