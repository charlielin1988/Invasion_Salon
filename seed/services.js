const db = require('../db');
const Service = require('../models/service');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const services = [
    {
      service_name: 'Single Process Color',
      description: 'Virgin Hair Single Process Color',
      price: '125',
      url: 'https://s-media-cache-ak0.pinimg.com/originals/40/54/8e/40548e38a9ea82b68c5a895c3aef4a8c.jpg'
    },
    {
      service_name: 'Dimensional Color',
      description: 'Virgin Hair Balayage, Highlights',
      price: '150 And Up',
      url: 'https://i.pinimg.com/736x/59/fb/70/59fb70a4dbd6aabdc2876bdb77a49b1d.jpg'
    },
    {
      service_name: 'Global Blonde',
      description: 'Virgin Hair Full Bleach Out With No Highlights',
      price: '250 And Up',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F553855a7e4b0dacdf31c591a%2Ft%2F59a1fac9893fc05119152352%2F1503787730973%2FIMG_8803.JPG&f=1&nofb=1'
    },

    {
      service_name: 'Galaxy Hair',
      description:
        'Double Process Hair Color Available In Natural And/Or Fantasy Colors',
      price: '300 And Up',
      url: 'https://i.pinimg.com/originals/50/d7/8a/50d78a83aca72b64dd6a0f0364715e71.jpg'
    },
    {
      service_name: 'Dark Side Of The Moon',
      description: 'Blonde Going Dark',
      price: '200 And Up',
      url: 'https://i.pinimg.com/originals/70/09/91/7009910da41b3daf9bb3ad11346632a9.jpg'
    },
    {
      service_name: 'Sparkles In The Sky',
      description: 'Grays Retouch',
      price: '100',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2941%2F8170%2Ffiles%2FSalt_Grey_Coverage_Before_and_After_large.jpg%3Fv%3D1586883579&f=1&nofb=1'
    },
    {
      service_name: 'Color Correction',
      description:
        'Consultation Needed Before Booking; Consult Fee Goes Toward Service If Booked Same Day',
      price: '300 And Up (With $40 Consult Fee)',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.stylecraze.com%2Fwp-content%2Fuploads%2F2018%2F10%2FWhat-Happens-In-A-Hair-Color-Correction-Process.jpg&f=1&nofb=1'
    },
    {
      service_name: 'Long Layered Cut',
      description: 'Includes Shampoo And Style',
      price: '50',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flovehairstyles.com%2Fwp-content%2Fuploads%2F2016%2F11%2Fstylish-fun-long-layered-haircuts-highlights.jpg&f=1&nofb=1'
    },
    {
      service_name: 'Short Or Buzz Cut',
      description: 'Includes Shampoo And Style',
      price: '25',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshorthaircutsmodels.com%2Fwp-content%2Fuploads%2F2020%2F04%2FPixie-haircut-with-buzzed-nape-20.jpg&f=1&nofb=1'
    },
    {
      service_name: 'Kids Cut',
      description: 'Includes Shampoo And Style',
      price: '25',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F37%2F47%2F34%2F374734efa36faeb8f5680a3c3116e17f.jpg&f=1&nofb=1'
    },
    {
      service_name: 'Olaplex Treatment',
      description:
        'Restorative Deep Conditioning Treatment For Color-Treated Hair',
      price: '30',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmokaspasalon.ca%2Fwp-content%2Fuploads%2F2019%2F11%2Fantes-y-despues-del-olaplex-1.jpg&f=1&nofb=1'
    }
  ];
  await Service.insertMany(services);
  console.log('Created Services!');
};

const run = async () => {
  await main();
  db.close;
};
run();
