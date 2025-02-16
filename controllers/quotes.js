const express = require('express')
const router = express.Router()
const Quote = require('../models/quotes')
const mongoose = require('mongoose')

// controllers/quotes.js
// const { Quote } = require('../models') // ✅ Use from index.js



// ✅ Handle Favicon Request to Avoid Errors
router.get('/favicon.ico', (req, res) => res.status(204).end())

// ✅ INDEX ROUTE: Show All Quotes
router.get('/frenzies', async (req, res) => {
  try {
    const allQuotes = await Quote.find({})
    res.render('index.ejs', { quotes: allQuotes || [] })
  } catch (error) {
    console.error('Error fetching quotes:', error.message)
    res.status(500).send('Internal Server Error')
  }
})


  

// 🟢 Static Routes First
router.get('/about', (req, res) => {
    res.render('about.ejs');
  });



// ✅ NEW ROUTE: Form to Create New Quote
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// ✅ CREATE ROUTE: Add New Quote
router.post('/', async (req, res) => {
  try {
    const createdQuote = await Quote.create(req.body)
    res.redirect('/frenzies')
  } catch (error) {
    console.error('Error creating quote:', error.message)
    res.status(500).send('Internal Server Error')
  }
})

// ✅ EDIT ROUTE: Form to Edit a Quote
router.get('/:id/edit', async (req, res) => {
  try {
    const foundQuote = await Quote.findById(req.params.id)
    if (!foundQuote) {
      return res.status(404).send('Quote not found')
    }
    res.render('edit.ejs', { quote: foundQuote })
  } catch (error) {
    console.error('Error fetching quote for edit:', error.message)
    res.status(500).send('Internal Server Error')
  }
})

// ✅ UPDATE ROUTE: Update Quote Details
router.put('/:id', async (req, res) => {
  try {
    await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.redirect('/frenzies')
  } catch (error) {
    console.error('Error updating quote:', error.message)
    res.status(500).send('Internal Server Error')
  }
})

// ✅ SHOW ROUTE: Show Individual Quote
router.get('/:id', async (req, res) => {
    const { id } = req.params
  
    // Validate ID Format (Avoid Crashes for Invalid IDs)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error('Invalid ID format:', id)
      return res.status(400).send('Invalid quote ID')
    }
  
    try {
      const foundQuote = await Quote.findById(id)
      if (!foundQuote) {
        return res.status(404).send('Quote not found')
      }
      res.render('show.ejs', { quote: foundQuote })
    } catch (error) {
      console.error('Error fetching quote:', error.message)
      res.status(500).send('Internal Server Error')
    }
  })

// ✅ DELETE ROUTE: Remove Quote
router.delete('/:id', async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id)
    res.redirect('/frenzies')
  } catch (error) {
    console.error('Error deleting quote:', error.message)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
