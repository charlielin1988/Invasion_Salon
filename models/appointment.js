const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    customer_name: { type: String },
    date: { type: String },
    time: { type: String },
    service_id: { type: Schema.Types.ObjectId, ref: 'services' },
    service_item: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('appointments', Appointment);
