const { model } = require('mongoose');
const StylistSchema = require('./stylist');
const AppointmentSchema = require('./appointment');

const Stylist = model('stylists', StylistSchema);
const Appointment = model('appointments', AppointmentSchema);

module.exports = {
  Stylist,
  Appointment
};
