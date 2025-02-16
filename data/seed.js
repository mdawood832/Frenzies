require('dotenv').config();
const mongoose = require('mongoose');
const Quote = require('../models/quotes');

// Connect to MongoDB using the correct database
mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'Frenzies', // ✅ Add this line to force the correct database
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed data
const seedQuotes = [
  {
    title: 'Curios cat',
    author: 'Ben Jonson',
    body: 'Curiosity killed the cat, but satisfaction brought it back.',
  },
  {
    title: 'VINCENT',
    author: 'Vincent van Gogh',
    body: 'It is good to love many things...',
  },
  {
    title: 'Rain',
    author: 'Dolly Parton',
    body: 'If you want the rainbow, you gotta put up with the rain.',
  },
  {
    title: 'Annoying',
    author: 'Tyler the Creator',
    body: 'I’m a really, really, smart, multi-talented genius...',
  },
];

// Insert data
const seedDB = async () => {
  try {
    await Quote.deleteMany({}); // Clear old data
    await Quote.insertMany(seedQuotes);
    console.log('✅ Database seeded successfully');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed
seedDB();





// [
// 	{
// 		title: 'Curios cat',
// 		author: 'Ben Jonson',
//         body: 'Curiosity killed the cat, but satisfaction brought it back.'
// 	},
//     {
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
// ]
