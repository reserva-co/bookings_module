var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reservadata', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('yatta');
});

var reservationSchema = new mongoose.Schema({
  listingId: String,
  year: Number,
  August: [Number],
  September: [Number],
  October: [Number],
  November: [Number]
});

var Reservations = mongoose.model('Reservation', reservationSchema);

var NumberOfDaysReserved = (maxDays) => {
  return Math.ceil(Math.random()*maxDays);
};

var getRandomDay = (maxDays) => {
  return Math.ceil(Math.random()*maxDays);
};

var generateReservedDates = (num, maxDays) => {
  var array = [];
  for (let j = 0; j < num; j++) {
    array.push(getRandomDay(maxDays));
  }
  return array;
};

for (var i = 0; i < 100; i++) {
  Reservations.create({
    listingId: JSON.stringify(i).padStart(2, 0),
    year: 2019,
    August: generateReservedDates(NumberOfDaysReserved(31), 31),
    September: generateReservedDates(NumberOfDaysReserved(30), 30),
    October: generateReservedDates(NumberOfDaysReserved(31), 31),
    November: generateReservedDates(NumberOfDaysReserved(29), 29)
  })
}
