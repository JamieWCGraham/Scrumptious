import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home.jsx";
import Breakfast from "./pages/breakfast/Breakfast.jsx";
import LunchNDinner from "./pages/lunchndinner/LunchNDinner.jsx";
import Drinks from "./pages/drinks/Drinks.jsx";
import Dessert from "./pages/dessert/Dessert.jsx";
import Contact from "./pages/contact/Contact.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router basename="/scrumptious">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/breakfast">
            <Breakfast/>
          </Route>
          <Route path="/lunchndinner">
            <LunchNDinner/>
          </Route>
          <Route path="/drinks">
            <Drinks/>
          </Route>
          <Route path="/dessert">
            <Dessert/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
