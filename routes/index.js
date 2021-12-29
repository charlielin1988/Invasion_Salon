const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root'));
router.get('/stylists', controllers.getAllStylists);
router.get('/stylists/appointments', controllers.getAllAppointments);
router.get('/stylists/appointments/:id', controllers.getAppointmentById);
router.get('/stylists/:id', controllers.getStylistById);
router.post('/stylists/appointments', controllers.createAppointment);
router.put('/stylists/appointments/:id', controllers.updateAppointment);
router.delete('/stylists/appointments/:id', controllers.deleteAppointment);

module.exports = router;
