const db = require('../db')
const { Stylist, Appointment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const stylist1 = await new Stylist({
    name: 'Maybe Saylor',
    service_type: 'hair',
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }) 
  stylist1.save()
const  stylist2 = await new Stylist({
  name: 'Jeanette',
  service_type: 'esthetics',
  availability:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
})
stylist2.save()

const appointments = [
  {
  customer_name: 'Alexis Rose',
  service_name: 'cut and color',
    date: 'January 11th, 2022',
    time: '10:00 AM',
    stylist: stylist1._id
  },
  {
  customer_name: 'David Rose',
  service_name: 'Get Glowing Facial',
  date: 'January 12th, 2022',
  time: '2:00 PM',
  stylist: stylist2._id
  }
]
await Appointment.insertMany(appointments)
console.log('Created appointments!')
}
const run = async () => {
  await main()
  db.close()
}
run()