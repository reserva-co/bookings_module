/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservadata', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
});

const reservationSchema = new mongoose.Schema({
  listingId: String,
  rating: Number,
  numberOfReviews: Number,
  price: Number,
  cleaningFee: Number,
  serviceFee: Number,
  views: Number,
  month1: [Number],
  month2: [Number],
  month3: [Number],
  month4: [Number],
  year: Number,
});

const Reservations = mongoose.model('Reservation', reservationSchema);

Reservations.deleteMany({}, (err) => {
  if (err) console.log(err);
});

const generateNumberOfDaysReserved = (maxDays) => Math.ceil(Math.random() * maxDays);
const generateRandomDay = (maxDays) => Math.ceil(Math.random() * maxDays);
const generatePrice = () => Math.ceil(Math.random() * 500) + 60;
const generateRating = () => (Math.random() + 4).toFixed(2);
const generateCleaningFee = () => Math.ceil(Math.random() * 40) + 30;
const generateServiceFee = () => Math.ceil(Math.random() * 10) + 10;
const generateNumberOfReviews = () => Math.ceil(Math.random() * 250) + 20;
const generateViews = () => Math.ceil(Math.random() * 250) + 30;

const generateReservedDates = (num, maxDays) => {
  const array = [];
  for (let j = 0; j < num; j += 1) {
    array.push(generateRandomDay(maxDays));
  }
  return array;
};


for (let i = 0; i < 100; i += 1) {
  Reservations.create({
    listingId: JSON.stringify(i).padStart(2, 0),
    rating: generateRating(),
    numberOfReviews: generateNumberOfReviews(),
    price: generatePrice(),
    cleaningFee: generateCleaningFee(),
    serviceFee: generateServiceFee(),
    views: generateViews(),
    month1: generateReservedDates(generateNumberOfDaysReserved(31), 31),
    month2: generateReservedDates(generateNumberOfDaysReserved(30), 30),
    month3: generateReservedDates(generateNumberOfDaysReserved(31), 31),
    month4: generateReservedDates(generateNumberOfDaysReserved(29), 29),
    year: 2019,
  });
}


module.exports = {
  Reservations,
};
