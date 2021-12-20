import './styles/App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ServiceMenu from './pages/ServiceMenu';
import Nav from './components/Nav';
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
            path="service-menu"
            component={(props) => <ServiceMenu {...props} />}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
