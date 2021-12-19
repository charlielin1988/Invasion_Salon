const db = require('../db')
const Stylist = require('../models/stylist')

db.on('error', console.error.bind(console, 'MongoDB Connection error:'))

const main = async () => {
  const stylists = [
    {
    name: 'Maybe Saylor',
    service_type: 'hair',
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    },
  {
    name: 'Jeanette',
    service_type: 'esthetics',
    availability:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  }
  ]
  await Stylist.insertMany(stylists)
  console.log('Stylists created!')
}
const run = async () => {
  await main () 
  db.close()
}
run()