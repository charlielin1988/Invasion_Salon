import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Nav from './components/Nav';
import Services from './pages/Services';
import About from './pages/About';
import Appointments from './pages/Appointments';

const App = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);
  const getServices = async () => {
    const res = await axios.get(`http://localhost:3001/api/services`);
    setServices(res.data.services);
  };

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/services"
            render={(props) => <Services {...props} services={services} />}
          />
          <Route path="/about" component={About} />
          <Route path="/appointments" component={Appointments} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
