const db = require('../db')
const Appointment = require('../models/appointment')

db.on('error', console.error.bind(console, 'MongoDB Connection error:'))

const createAppointments = async () => {
  const appointments = [
  {
  customer_name: 'Alexis Rose',
  service_name: 'cut and color',
    month: 'January',
    day: '11',
    time: '10',
    stylist: 'Maybe Saylor'
  },
  {
  customer_name: 'David Rose',
  service_name: 'Get Glowing Facial',
  month: 'January',
  day: '13',
  time: '2',
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