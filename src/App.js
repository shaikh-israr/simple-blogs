import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PlayerPages from './components/PlayerPage';
import ContentPage from './components/PlayerPage';

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route paht="/" exact component={ContentPage} />
          <Route paht="/players" component={PlayerPages} /> 
          <Route paht="/contactus" component={ContactUs} />
          <Route paht="/about" component={AboutUs} />
        </Switch>
    </Router>
  )
}

export default App
