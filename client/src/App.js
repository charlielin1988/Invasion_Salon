import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import ServiceMenu from './pages/ServiceMenu';
import services from './data/services';
import StylistAppointment from './pages/StylistAppointment';
import axios from 'axios';
//import Stylist from './components/Stylist';
const App = () => {
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    const res = await axios.get(`http://localhost:3001/api/appointments`);
    setAppointments(res.data.appointments);
    console.log(appointments);
  };
  useEffect(() => {
    getAppointments();
  }, []);
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
          <Route path="/appointments" component={StylistAppointment} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
