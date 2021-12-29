const mongoose = require('mongoose');
const StylistSchema = require('./stylist');
const AppointmentSchema = require('./appointment');

const Stylist = mongoose.model('stylists', StylistSchema);
const Appointment = mongoose.model('appointments', AppointmentSchema);

module.exports = {
  Stylist,
  Appointment
};
