const mongoose = require('mongoose');
const AppointmentSchema = require('./appointment');
const ServiceSchema = require('./service');

const Appointment = mongoose.model('appointments', AppointmentSchema);
const Service = mongoose.model('services', ServiceSchema);
module.exports = {
  Appointment,
  Service
};
