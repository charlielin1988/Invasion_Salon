const db = require('../db')
const Appointment = require('../models/appointment')

db.on('error', console.error.bind(console, 'MongoDB Connection error:'))

const createAppointments = async () => {
  const appointments = [
  {
  customer_name: 'Alexis Rose',
  service_name: 'cut and color',
    date: 'January 11th, 2022',
    time: '10:00 AM',
    stylist: 'Maybe Saylor'
  },
  {
  customer_name: 'David Rose',
  service_name: 'Get Glowing Facial',
  date: 'January 12th, 2022',
  time: '2:00 PM',
  stylist: 'Jeanette'
  }
]
await Appointment.insertMany(appointments)
console.log('Created appointments!')
return appointments;
}
const run = async () => {
  const appointment = await createAppointments();
  db.close()
}
run()