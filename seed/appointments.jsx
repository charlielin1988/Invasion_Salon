const db = require('../db')
const { Stylist, Appointment } = ('../models')

const main = async () => {
  const maybeSaylor = await Stylist.find({ name: 'Maybe Saylor'})
  const jeanette = await Stylist.find({ name: 'Jeanette'})


const appointments  = [
  {
    customer_name: 'Alexis Rose',
    stylist_id: maybeSaylor[0]._id,
    service_name: 'Cut and color',
    date: 'Tuesday, January 11th, 2022',
    time: '10:00 AM'
},
{
  customer_name: 'David Rose',
  stylist_id: jeanette[0]._id,
  service_name: 'Get Glowing Facial',
  date: 'Monday, January 10th, 2022',
  time: '2:00 PM'
}

]
await Appointment.insertMany(appointments)
console.log('Created appointments with stylists!')
}
const run = async () => {
  await main()
  debug.close()
}
run() 