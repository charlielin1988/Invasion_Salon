import './styles/App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import ServiceMenu from './pages/ServiceMenu';
import services from './data/Services';
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
