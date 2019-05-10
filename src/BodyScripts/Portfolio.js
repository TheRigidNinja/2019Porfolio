import React, { Component } from 'react';
import LogoB from "../IMG/LogoW.svg";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

export default class Portfolio extends Component {
  // state = {
    
  // }

  render() {
    return (
      <BrowserRouter>

        <nav>
          <Link to="/Projects">Projects</Link>
          <Link to="/About"><img src={LogoB} alt="Logo"/></Link>
          <Link to="/About">About</Link>
        </nav>
        <Link to="/Contact" className="ContactNav">Get In Touch</Link>


        <Switch>
          <Route exact path="/" component={Project} />
          <Route path="/Projects" component={Project} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>

      </BrowserRouter>
    )
  }
}
