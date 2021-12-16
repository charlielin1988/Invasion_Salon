const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stylist = new Schema(
  {
    stylist_name: { type: String, required: true },
    services: [{ type: Schema.Types.ArrayId, ref: 'services' }],
    availability: [{ type: Schema.Types.ObjectId, ref: 'availability' }],
    appointments: [{ type: Schema.Types.ObjectId, ref: 'appointments' }]
  },
  { timestamps: true }
);
module.exports = Stylist;
