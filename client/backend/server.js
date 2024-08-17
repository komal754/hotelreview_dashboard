const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const HotelReview = require('./Model/HotelReview');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.post('/api/hotel-reviews', async (req, res) => {
  try {
    const hotelReview = new HotelReview(req.body);
    const review = await hotelReview.save();
    res.json(review); // Send a JSON response
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating hotel review' }); // Send a JSON response with error message
  }
});

app.get('/api/hotel-reviews', (req, res) => {
  const limit = 10;
  const offset = req.query.offset || 0;
  HotelReview.find().skip(offset).limit(limit)
    .then((reviews) => {
      res.json(reviews); // Send a JSON response
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: 'Error retrieving hotel reviews' }); // Send a JSON response with error message
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});