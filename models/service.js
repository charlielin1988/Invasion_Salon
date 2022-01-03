const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Service = new Schema(
  {
    service_name: { type: String },
    price: { type: String },
    description: { type: String },
    image: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('services', Service);
