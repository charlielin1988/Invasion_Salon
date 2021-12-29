import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import HairServiceMenu from './pages/HairServiceMenu';
import EstheticServiceMenu from './pages/EstheticServiceMenu';
import StylistDetails from './pages/StylistDetails';

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} />} />
          <Route path="/hair-service-menu" component={HairServiceMenu} />
          <Route
            path="/esthetic-service-menu"
            component={EstheticServiceMenu}
          />
          <Route
            path="/stylists/details/:stylistId"
            render={(props) => <StylistDetails {...props} />}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
