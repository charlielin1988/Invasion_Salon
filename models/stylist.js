const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stylist = new Schema(
  {
    name: { type: String, required: true },
    service_type: { type: String, required: true },
    availability: { type: String, required: true },
    appointment: [{ type: Schema.Types.ObjectId, ref: 'appointments' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('stylists', Stylist);
