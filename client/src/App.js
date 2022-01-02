import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import ServiceDetails from './pages/ServiceDetails';
import About from './pages/About';

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
            path="/services/details/:serviceId"
            render={(props) => <ServiceDetails {...props} />}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
