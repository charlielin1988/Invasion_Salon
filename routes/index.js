const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root'));

router.post('/services/add', controllers.createService);

router.post('/appointments/add', controllers.createAppointment);

router.get('/services', controllers.getAllServices);

router.get('/appointments', controllers.getAllAppointments);

router.get('/services/:_id', controllers.getServiceById);

router.get('/appointments/:_id', controllers.getAppointmentById);

router.put('/services/update/:_id', controllers.updateService);

router.put('/appointments/update/:_id', controllers.updateAppointment);

router.delete('/services/:_id', controllers.deleteService);

router.delete('/appointments/:_id', controllers.deleteAppointment);

module.exports = router;
