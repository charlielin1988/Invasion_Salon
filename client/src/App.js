import './styles/App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import StylistAppointment from './pages/StylistAppointment';
import Nav from './components/Nav';
import ServiceMenu from './pages/ServiceMenu';
import services from './data/services';
const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/service-menu"
            render={(props) => <ServiceMenu {...props} services={services} />}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
