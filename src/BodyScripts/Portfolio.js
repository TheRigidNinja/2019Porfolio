import React, { Component } from "react";
import LogoB from "../IMG/LogoB.svg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Project from "./Project";
import About from "./About";
import FeedBack from "./FeedbackSection/Feedback";

export default class Portfolio extends Component {
  state = {
    filterStyle: {
      display: "block"
    },
    searchStyle: {
      height: "100%"
    },
    currentActive: "?",
    mouseState: null,
    searchFilter: "",
    filterTagStyle: {
      display: "none"
    },
    activeFilter: null
  };

  componentDidMount() {
    this.handleMenu();

    // Handles drag scroll on filter tags
    const slider = document.querySelector(".filters");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", e => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => (isDown = false));
    slider.addEventListener("mouseup", () => (isDown = false));
    slider.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  // Toggles search filters
  handleMenu = event => {
    var windowPath = window.location.pathname.replace("/", "");

    if (["Project", "Contact", "About"].includes(windowPath)) {
      var filterDisp = "none",
        searchStyle = "0px";

      if (windowPath === "Contact") {
        this.handleContactPage();
      }

      if (windowPath === "Project") {
        filterDisp = "block";
        searchStyle = "100%";
      }

      // Sets to active button
      document.getElementById(windowPath).className = "activeButton";

      // Remove Prov Class
      if (
        this.state.currentActive !== "?" &&
        this.state.currentActive !== windowPath
      ) {
        document
          .querySelector("#" + this.state.currentActive)
          .removeAttribute("class", "activeButton");
      }

      this.setState({
        filterStyle: {
          display: filterDisp
        },
        searchStyle: {
          height: searchStyle
        },
        currentActive: windowPath
      });
    }
  };

  // Handles Search Filter
  handleSearchFilter = e => {
    var htmlInfo = e !== "Remove" ? e.target.innerHTML : "",
      style = e !== "Remove" ? "flex" : "none",
      activeFilter = e.target;

    if (!/</g.test(htmlInfo) || e === "Remove") {
      if (e !== "Remove") {
        activeFilter.setAttribute("class", "activeFilter");
      }

      if (this.state.activeFilter) {
        this.state.activeFilter.removeAttribute("class", "activeFilter");
      }

      this.setState({
        searchFilter: htmlInfo,
        filterTagStyle: { display: style },
        activeFilter: activeFilter
      });
    }
  };

  // Handles navigates to contact section whenever pressing on contact button
  handleContactPage = () => {
    var elm = document.querySelector("#root"),
      contElm;
    elm.scrollTop = elm.scrollHeight;

    setTimeout(() => {
      contElm = document.querySelector("#contact");
      contElm.setAttribute("class", "contactActive");
    }, 100);

    setTimeout(() => {
      contElm.removeAttribute("class", "contactActive");
    }, 2000);
  };

  render() {
    return (
      <BrowserRouter>
        <nav>
          <img src={LogoB} />
          <div className="searchFilter">
            <div className="Search" style={this.state.searchStyle}>
              <input type="search" placeholder="Search" />
              <i className="fas fa-search" />
              <span
                id="filterTag"
                style={this.state.filterTagStyle}
                onClick={() => this.handleSearchFilter("Remove")}
              >
                <span>{this.state.searchFilter}</span>
              </span>
            </div>
            <div
              className="Pages"
              onClick={this.handleMenu}
              style={this.state.pagesStyle}
            >
              <Link to="/Project" id="Project">
                Project
              </Link>
              <Link to="/About" id="About">
                About
              </Link>
              <Link to="/Contact" id="Contact" onClick={this.handleContactPage}>
                Contact
              </Link>
            </div>
          </div>

          <div
            className="filters"
            style={this.state.filterStyle}
            onClick={event => this.handleSearchFilter(event)}
          >
            <span id="data1">Games</span>
            <span id="data2">Websites</span>
            <span id="data3">MySql</span>
            <span id="data4">HTML/CSS/SASS</span>
            <span id="data5">Node.js</span>
            <span id="data6">Web Apps</span>
            <span id="data7">React/Redux</span>
            <span id="data8">JavaScript/jQuery</span>
            <span id="data9">Python</span>
            <span id="data10">Firebase</span>
            <span id="data11">Simulations</span>
          </div>
        </nav>

        <Switch>
          <Route path="/Project" component={Project} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={About} />
          <Route path="" component={Project} />
        </Switch>

        {/* Feed back */}
      </BrowserRouter>
    );
  }
}
