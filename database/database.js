/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservadata', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('yatta');
});

const reservationSchema = new mongoose.Schema({
  listingId: String,
  year: Number,
  August: [Number],
  September: [Number],
  October: [Number],
  November: [Number],
});

const Reservations = mongoose.model('Reservation', reservationSchema);

const NumberOfDaysReserved = (maxDays) => Math.ceil(Math.random() * maxDays);

const getRandomDay = (maxDays) => Math.ceil(Math.random() * maxDays);

const generateReservedDates = (num, maxDays) => {
  const array = [];
  for (let j = 0; j < num; j += 1) {
    array.push(getRandomDay(maxDays));
  }
  return array;
};

for (let i = 0; i < 100; i += 1) {
  Reservations.create({
    listingId: JSON.stringify(i).padStart(2, 0),
    year: 2019,
    August: generateReservedDates(NumberOfDaysReserved(31), 31),
    September: generateReservedDates(NumberOfDaysReserved(30), 30),
    October: generateReservedDates(NumberOfDaysReserved(31), 31),
    November: generateReservedDates(NumberOfDaysReserved(29), 29),
  });
}
