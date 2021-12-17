const db = require('.../db')
const { Stylist } = require('../models')

const main = async () => {
  const stylists = [
    { 
      stylist_name: 'Maybe Saylor',
      service_type: 'Hair Services',
      availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
    },
    {
      stylist_name: 'Jeanette',
      service_type: 'Esthetic Services',
      availability: ['Monday', 'Tuesday','Wendesay', 'Thursday', 'Friday']
    }
  ]
await Stylist.insertMany(stylists)
console.log('Created stylists!')
}
const run = async () => {
  await main()
  db.close
}
run() 