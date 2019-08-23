/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservadata', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
});

const reservationSchema = new mongoose.Schema({
  listingId: String,
  year: Number,
  month1: [Number],
  month2: [Number],
  month3: [Number],
  month4: [Number],
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

const getFirstReservation = () => {
  Reservations.findOne({});
};

for (let i = 0; i < 100; i += 1) {
  Reservations.create({
    listingId: JSON.stringify(i).padStart(2, 0),
    year: 2019,
    month1: generateReservedDates(NumberOfDaysReserved(31), 31),
    month2: generateReservedDates(NumberOfDaysReserved(30), 30),
    month3: generateReservedDates(NumberOfDaysReserved(31), 31),
    month4: generateReservedDates(NumberOfDaysReserved(29), 29),
  });
}


module.exports = {
  Reservations,
  getFirstReservation,
};
