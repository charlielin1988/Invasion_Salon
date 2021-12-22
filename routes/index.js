const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root'));
router.get('/stylists', controllers.getAllStylists);
router.get('/stylists/details/:_id', controllers.getStylistById);
router.post('/appointments', controllers.createAppointment);
router.put('/appointments/details/:_id', controllers.updateAppointment);
router.delete('/appointments/details/:_id', controllers.deleteAppointment);
router.get('/appointments', controllers.getAllAppointments);
router.get('/appointments/details/:_id', controllers.getAppointmentById);

module.exports = router;
