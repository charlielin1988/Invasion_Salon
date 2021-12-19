const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    customer_name: { type: String, required: true },
    service_name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    stylist: { type: Schema.Types.ObjectId, ref: 'stylists' }
  },
  { timestamps: true }
);

module.exports = Appointment;
