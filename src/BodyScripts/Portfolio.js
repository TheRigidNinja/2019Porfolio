import React, { Component } from "react";
import LogoB from "../IMG/LogoW.svg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

export default class Portfolio extends Component {
  state = {
    styleLeft: {
      left: "-180px"
    },
    styleRotate: {
      transform: "rotateZ(0deg)"
    }
  };

  componentDidMount() {
    var elm = document.getElementById("root");
    elm.addEventListener("scroll", e => this.handleMenuDrop(e));


    elm.addEventListener("click", event => {
      if (event.target.className !== "fas fa-arrow-right") {
        this.toggleLeft(event, "window");
      }
    });

    elm.addEventListener("scroll", event => {
      if (event.target.className !== "fas fa-arrow-right") {
        this.toggleLeft(event, "window");
      }
    });

    elm.addEventListener("touchstart", event => {
      if (event.target.className !== "fas fa-arrow-right") {
        this.toggleLeft(event, "window");
      }
    });
  }

  // Check scroll
  handleMenuDrop = e => {
    var nav = document.querySelector("nav"),
      img = document.querySelector("nav img");

    if (e.target.scrollTop >= 80) {
      nav.style.height = "75px";
      nav.style.top = "0px";
      img.style.margin = "0px 0px 0px 0px";
      img.style.width = "50px";
    } else {
      nav.style.height = "0px";
      nav.style.top = "50px";
      img.style.margin = "30px 0px 0px 0px";
      img.style.width = "80px";
    }
  };

  toggleLeft = (event, action) => {
    if (
      (action === "window" && this.state.styleLeft.left === "0px") ||
      event.target.className === "fas fa-arrow-right"
    ) {
      var left = this.state.styleLeft.left === "-180px" ? "0px" : "-180px",
        rotate =
          this.state.styleRotate.transform === "rotateZ(0deg)"
            ? "rotateZ(180deg)"
            : "rotateZ(0deg)";
      this.setState({
        styleLeft: {
          left: left
        },
        styleRotate: {
          transform: rotate
        }
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/Projects">Projects</Link>
          <Link to="/About">
            <img src={LogoB} alt="Logo" className="logo" />
          </Link>
          <Link to="/About">About</Link>
        </nav>
        <span className="ContactNav" style={this.state.styleLeft}>
          <Link to="/Contact">Get In Touch </Link>
          <i
            className="fas fa-arrow-right"
            style={this.state.styleRotate}
            onClick={event => this.toggleLeft(event)}
          />
        </span>

        <Switch>
          <Route path="/Projects" component={Project} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/OldPortfolio" component={Contact} />
          <Route path="" component={Project} />
        </Switch>
      </BrowserRouter>
    );
  }
}
