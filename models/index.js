const { model } = require('mongoose');
const StylistSchema = require('./stylist');
const AppointmentSchema = require('./appointments');

const Stylist = model('stylists', StylistSchema);
const Appointment = model('appoinments', AppointmentSchema);

module.exports = {
  Stylist,
  Appointment
};
