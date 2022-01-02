const db = require('../db');
const Service = require('../models/service');
const Appointment = require('../models/appointment');

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async () => {
  const single = await Service.find({ service_name: 'Single Process Color' });
  const dimensional = await Service.find({ service_name: 'Dimensional Color' });
  const global = await Service.find({ service_name: 'Global Blonde' });
  const galaxy = await Service.find({ service_name: 'Galaxy Hair' });
  const dark = await Service.find({ service_name: 'Dark Side Of The Moon' });
  const sparkles = await Service.find({ service_name: 'Sparkles In The Sky' });
  const correction = await Service.find({ service_name: 'Color Correction' });
  const long = await Service.find({ service_name: 'Long Layered Cut' });
  const short = await Service.find({ service_name: 'Short Or Buzz Cut' });
  const kids = await Service.find({ service_name: 'Kids Cut' });
  const olaplex = await Service.find({ service_name: 'Olaplex Treatment' });

  const appointments = [
    {
      customer_name: 'Emika Chen',
      date: '01/14/2022',
      time: '2:00 PM',
      service_id: galaxy[0]._id
    },
    {
      customer_name: 'Hamilton Jimenez',
      date: '01/15/2022',
      time: '10:00 AM',
      service_id: long[0]._id
    },
    {
      customer_name: 'Asher Wing',
      date: '01/15/2022',
      time: '3:30 PM',
      service_id: short[0]._id
    },
    {
      customer_name: 'Tremaine Blackbourne',
      date: '01/14/2022',
      time: '10:00 AM',
      service_id: global[0]._id
    }
  ];
  await Appointment.insertMany(appointments);
  console.log('Created Appointments!');
};
const run = async () => {
  await main();
  db.close();
};
run();
