import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import PlayerPages from './components/PlayerPage'
import ContentPage from './components/ContentPage'
import NavBar from './components/NavBar';
function RoutrUrl() {
    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route path="/" exact component={ContentPage} />
                    <Route path="/players" component={PlayerPages} /> 
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/about" component={AboutUs} />
                </Switch>
        </Router>
    )
}

export default RoutrUrl
