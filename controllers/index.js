const Stylist = require('../models/stylist');
const Appointment = require('../models/appointment');
const { process_params } = require('express/lib/router');

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

const getAllStylists = async (req, res) => {
  try {
    const stylists = await Stylist.find();
    return res.status(200).json({ stylists });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getStylistById = async (req, res) => {
  try {
    const { id } = req.params;
    const stylist = await Stylist.findById(id);
    if (stylist) {
      return res.status(200).json({ stylist });
    }
    return res.status(404).send('Stylist with the specified id does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (appointment) {
      return res.status(200).json(appointment);
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
    const { id } = req.params;
    await Appointment.findByIdAndUpdate(
      id,
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

const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Appointment.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Appointment deleted!');
    }
    throw new Error('Appointment not found!');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllStylists,
  getAllAppointments,
  getStylistById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentById
};
