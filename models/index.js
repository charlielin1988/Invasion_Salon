const mongoose = require('mongoose');
const StylistSchema = require('./Stylist');
const AppointmentSchema = require('./Appointment');

const Stylist = mongoose.model('stylists', StylistSchema);
const Appointment = mongoose.model('appointments', AppointmentSchema);

module.exports = {
  Stylist,
  Appointment
};
