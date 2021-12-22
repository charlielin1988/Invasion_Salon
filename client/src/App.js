import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import ServiceMenu from './pages/ServiceMenu';
import services from './data/services';
import axios from 'axios';
import AppointmentForm from './components/AppointmentForm';
// import StylistAppointment from './pages/StylistAppointment';
import Stylist from './components/Stylist';
import Appointments from './components/Appointments';

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} />} />
          <Route
            path="/service-menu"
            render={(props) => <ServiceMenu {...props} services={services} />}
          />
          <Route path="/stylists" render={(props) => <Stylist {...props} />} />
          <Route
            path="/appointments"
            component={(props) => <AppointmentForm {...props} />}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
