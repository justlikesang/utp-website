import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Approach from './components/Approach';
import Team from './components/Team';
import Connect from './components/Connect';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
/* 
-display navbar at the top of the page fixed for all the pages
    *figure out the react router of how to implement showing the navbar at the top at all times   
*/

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/service">
        <Service />
      </Route>
      <Route exact path="/approach">
        <Approach />
      </Route>
      <Route exact path="/team">
        <Team />
      </Route>
      <Route exact path="/connect">
        <Connect />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
