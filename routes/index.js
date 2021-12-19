const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root'));
router.post('/appointments', controllers.createAppointment);

module.exports = router;
