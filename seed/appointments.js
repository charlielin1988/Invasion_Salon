const db = require('../db');
const Stylist = require('../models/stylist');
const Appointment = require('../models/appointment');

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async () => {
  const maybeSaylor = await Stylist.find({ name: 'Maybe Saylor' });
  const jeanette = await Stylist.find({ name: 'Jeanette' });

  const appointments = [
    {
      customer_name: 'Alexis Rose',
      service_name: 'cut and color',
      appointment_date: '01-12-2022',
      time: '10',
      stylist_id: maybeSaylor[0]._id
    },
    {
      customer_name: 'David Rose',
      service_name: 'Get Glowing Facial',
      appointment_date: '01-13-2022',
      time: '2',
      stylist_id: jeanette[0]._id
    }
  ];
  await Appointment.insertMany(appointments);
  console.log('Created appointments!');
};
const run = async () => {
  await main();
  db.close();
};
run();
