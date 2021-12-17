const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stylist = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    contact: { type: String, required: true },
    service_type: { type: String, required: true },
    appointments: [{ type: Schema.Types.ObjectId, ref: 'appointments' }]
  },
  { timestamps: true }
);
module.exports = Stylist;
