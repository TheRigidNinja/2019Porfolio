import React, { Component } from 'react';
import LogoB from "../IMG/LogoW.svg";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

export default class Portfolio extends Component {
  // state = {

  // }


  componentDidMount(){
    var elm = document.getElementById("root");
    elm.addEventListener("scroll",(e)=>this.handleMenuDrop(e))
  }

  // Check scroll 
  handleMenuDrop=(e)=>{
    var nav = document.querySelector("nav"),
    img = document.querySelector("nav img");
    
    if(e.target.scrollTop >= 145){
      nav.style.height="100px"
      nav.style.top="0px"
      img.style.margin="0px 0px 0px 0px"
      img.style.width="50px"
    }else{
      nav.style.height="0px"
      nav.style.top="50px"
      img.style.margin="30px 0px 0px 0px"
      img.style.width="80px"
    }
  }


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
