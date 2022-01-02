const Service = require('../models/service');
const Appointment = require('../models/appointment');
const { process_params } = require('express/lib/router');

const createService = async (req, res) => {
  try {
    const service = await new Service(req.body);
    await service.save();
    return res.status(201).json({
      service
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const createAppointment = async (req, res) => {
  try {
    const appointment = await new Appointment(req.body);
    await appointment.save();
    return res.status(201).json({
      appointment
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    return res.status(200).json({ services });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.status(200).json({ appointments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { _id } = req.params;
    const service = await Service.findById(_id);
    if (service) {
      return res.status(200).json({ service });
    }
    return res.status(404).send('Service with the specified id does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const { _id } = req.params;
    const appointment = await Appointment.findById(_id);
    if (appointment) {
      return res.status(200).json({ appointment });
    }
    return res
      .status(404)
      .send('Appointment with the specified id does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { _id } = req.params;
    await Appointment.findByIdAndUpdate(
      _id,
      req.body,
      { new: true },
      (err, appointment) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!appointment) {
          res.status(500).send('Appointment not found!');
        }
        return res.status(200).json(appointment);
      }
    );
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    const { _id } = req.params;
    await Service.findByIdAndUpdate(
      _id,
      req.body,
      { new: true },
      (err, service) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!service) {
          res.status(500).send('Service Not Found');
        }
        return res.status(200).json(service);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};
const deleteService = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await Appointment.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('Service deleted!');
    }
    throw new Error('Service not found!');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await Appointment.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('Appointment deleted!');
    }
    throw new Error('Appointment not found!');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createService,
  createAppointment,
  getAllServices,
  getAllAppointments,
  getServiceById,
  getAppointmentById,
  deleteService,
  updateService,
  updateAppointment,
  deleteAppointment
};
