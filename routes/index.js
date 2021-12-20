const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root'));
router.get('/stylists', controllers.getAllStylists);
router.get('/stylists/:id', controllers.getStylistById);
router.post('/appointments', controllers.createAppointment);
router.put('/appointments/:id', controllers.updateAppointment);
router.delete('/appointments/:id', controllers.deleteAppointment);
router.get('/appointments', controllers.getAllAppointments);

module.exports = router;
