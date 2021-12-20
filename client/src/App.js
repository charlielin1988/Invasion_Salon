import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Routes>
            <Route path="/" component={<Home />} />
            <Route path="/stylists/:id" component={<Stylist />} />
          </Routes>
        </Switch>
      </main>
    </div>
  );
}

export default App;
