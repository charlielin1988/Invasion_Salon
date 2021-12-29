const db = require('../db');
const Stylist = require('../models/stylist');

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async () => {
  const stylists = [
    {
      name: 'Maybe Saylor',
      service_type: 'Hair',
      availability: 'Tuesday-Saturday, 10AM-7PM '
    },
    {
      name: 'Jeanette',
      service_type: 'Esthetics',
      availability: 'Monday-Friday, 10AM-7PM'
    }
  ];
  await Stylist.insertMany(stylists);
  console.log('Stylists created!');
};
const run = async () => {
  await main();
  db.close();
};
run();
