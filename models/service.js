const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Service = new Schema(
  {
    service_name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('services', Service);
