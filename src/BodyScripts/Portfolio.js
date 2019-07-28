import React, { Component } from "react";
import LogoB from "../IMG/LogoB.svg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Project from "./Project";
import About from "./About";
import { connect } from "react-redux";

class Portfolio extends Component {
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
    activeFilter: null,
    searchArray: [],
    objArray: {},
    searchData: false,
    filteredElm: [],
    searchTerms: "",
    objKeys: []
  };

  componentDidMount() {
    this.handleMenu();

    window.addEventListener("click", event => {
      let elm = event.target;

      if (
        !(
          elm.id === "SearchInput" ||
          elm.id === "fa-search" ||
          /data/g.test(elm.id)
        )
      ) {
        this.handlesFilterDropDown("WindowClick");
      }
    });

    // filter tag resizer
    this.handleResize();
    window.addEventListener("resize", () => this.handleResize());

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

  // Handle Resize OF Filter Name tags
  handleResize = () => {
    let winWidth = window.innerWidth,
      filterWidth = "400px";

    if (winWidth < 840) {
      filterWidth = "400px";
    } else if (winWidth >= 840 && winWidth < 1170) {
      filterWidth = "820px";
    } else {
      filterWidth = "1220px";
    }

    console.log(filterWidth);
    document.querySelector(".filters").style.width = filterWidth;
  };

  // Toggles search filters
  handleMenu = event => {
    var windowPath = window.location.pathname.replace("/", "");
    windowPath = windowPath === "" ? "Project" : windowPath;

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

  // --------// Search filters
  //  Handles Tags search filter
  handleSearchFilter = (tagType, event) => {
    if (typeof tagType === "object") {
      tagType.preventDefault();
    }

    if (!["Searching", "Filter"].includes(tagType)) {
      var htmlInfo = tagType !== "Remove" ? event.target.innerHTML : "",
        style = tagType !== "Remove" ? "flex" : "none",
        activeFilter = event ? event.target : "";

      if (!/</g.test(htmlInfo) || tagType === "Remove") {
        if (tagType !== "Remove") {
          activeFilter.classList.add("activeFilter");
        }

        if (this.state.activeFilter) {
          this.state.activeFilter.classList.remove("activeFilter");
        }

        this.setState(
          {
            searchFilter: htmlInfo,
            filterTagStyle: { display: style },
            activeFilter: activeFilter
          },
          () => this.handleFilterToProps(tagType)
        );
      }
    } else {
      this.handleFilterToProps(tagType);
    }
  };

  // Sending Search Terms to props so ProjectRenderer can filter projects
  handleFilterToProps = type => {
    if (this.state.searchData === true) {
      var filteredElm = [],
        searchTerms = "",
        tempSearchTerms = "",
        tempFilteredElm = [];

      if (type !== "Remove") {
        let searchElm = document.querySelector("#SearchInput").value;
        searchTerms =
          type === "FilterTag"
            ? this.state.searchFilter.toLocaleLowerCase()
            : searchElm.toLocaleLowerCase();
        type = type === "FilterTag" ? "Filter" : type;
        tempSearchTerms = searchTerms;

        // && type !== "Filter"
        if (searchTerms.length >= 2 && type !== "Clear") {
          // filters words
          filteredElm = this.state.searchArray.filter(data =>
            data.toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase())
          );
        } else {
          searchTerms = "";
        }

        tempFilteredElm = filteredElm;

        this.setState(
          {
            filteredElm: type === "Filter" ? "" : filteredElm,
            searchTerms: type === "Filter" ? "" : searchTerms
          },
          () => {
            // console.log(searchTerms);
            if (type === "Filter") {
              let arrayCheck = this.state.objArray[tempSearchTerms],
                keysData = arrayCheck ? [tempSearchTerms] : tempFilteredElm,
                tempobjKeys = this.state.objKeys,
                finaleInput = [];

              // Filtering matching keys words from the array
              if (keysData.length > 0) {
                keysData.forEach(key => {
                  this.state.objArray[key].forEach(val => {
                    finaleInput[val] = "";
                  });
                });

                // console.log(finaleInput);
                // ordering the searched key words first and anything else after it
                finaleInput = Object.keys(finaleInput);
                tempobjKeys = tempobjKeys.filter(
                  data => !finaleInput.includes(data)
                );

                // Merging all key words together in the new order
                this.props.SearchPerimeters({
                  [type]: [...finaleInput, ...tempobjKeys],
                  Ordered: finaleInput
                });
              }
            }
          }
        );
      }
    } else {
      this.turnObjToArray(type);
    }
  };

  // Gets ready the data for the search mechanism
  turnObjToArray = type => {
    var projectObj = this.props.ObjectSearch,
      objKeys = projectObj ? Object.keys(projectObj) : [],
      searchArray = [],
      objArray = {};
    // console.log(projectObj)

    // Turn obj into 1 array per each objKeys
    objKeys.forEach(obj => {
      let tempObj = [
        projectObj[obj].Details.Description,
        projectObj[obj].Details.Header,
        ...projectObj[obj].Keywords,
        ...projectObj[obj].Tech
      ];

      // Turn values on the above obj to keys and there keys to values
      tempObj.forEach(val => {
        val = val.toLocaleLowerCase();
        let objValue = objArray[val] ? objArray[val] : [];
        objArray[val] = [...objValue, obj];
      });
    });

    searchArray = Object.keys(objArray);

    this.setState(
      {
        searchArray: searchArray,
        objArray: objArray,
        objKeys: objKeys,
        searchData: true
      },
      () => this.handleFilterToProps(type)
    );

    return true;
  };

  // Handles Drop down suggestions
  handlesFilterDropDown = event => {
    if (event !== "WindowClick") {
      let htmlValue = event.target.innerText;

      if (!"Nothing like that! 😔".includes(htmlValue)) {
        document.querySelector("#SearchInput").value = htmlValue;
        this.handleSearchFilter("Filter");
      }
    } else {
      this.handleFilterToProps("Clear");
    }
  };

  render() {
    const SearchResults = () => {
      let filteredElm = this.state.filteredElm;

      if (filteredElm.length > 0) {
        return filteredElm.map(data => <li key={Math.random()}>{data}</li>);
      } else if (this.state.searchTerms.length > 0) {
        return (
          <li id="notFound">
            Nothing like that!{" "}
            <span role="img" aria-label="">
              😔
            </span>
          </li>
        );
      } else {
        return <></>;
      }
    };

    return (
      <BrowserRouter>
        <nav>
          <img src={LogoB} alt="Logo" />

          <div className="searchFilterCont">
            <div className="searchFilter">
              <div className="Search" style={this.state.searchStyle}>
                <form
                  onSubmit={event => {
                    this.handleSearchFilter("Filter");
                    event.preventDefault();
                  }}
                >
                  <input
                    type="search"
                    autoComplete="off"
                    placeholder="Search"
                    id="SearchInput"
                    onInput={() => this.handleSearchFilter("Searching")}
                  />
                  <button id="fa-search">
                    <i className="fas fa-search" id="fa-search" />
                  </button>
                </form>
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
                  Projects
                </Link>
                <Link to="/About" id="About">
                  About
                </Link>
                <Link
                  to="/Contact"
                  id="Contact"
                  onClick={this.handleContactPage}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Show search results */}
            <ul
              className="searchResults"
              onClick={event => {
                this.handlesFilterDropDown(event);
              }}
            >
              <SearchResults />
            </ul>
          </div>

          <div
            className="filters"
            style={this.state.filterStyle}
            onClick={event => this.handleSearchFilter("FilterTag", event)}
          >
            <span id="data1">Game</span>
            <span id="data2">Website</span>
            <span id="data3">MySql</span>
            <span id="data4">HTML/CSS/SASS</span>
            <span id="data5">Node.js</span>
            <span id="data6">Web App</span>
            <span id="data7">React/Redux</span>
            <span id="data8">JavaScript</span>
            <span id="data8">jQuery</span>
            <span id="data9">Python</span>
            <span id="data10">Firebase</span>
            <span id="data11">Simulation</span>
          </div>
        </nav>
        <Switch>
          <Route path="/Projects" component={Project} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={About} />
          <Route path="" component={Project} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    SearchPerimeters: data => {
      dispatch({ type: "SEARCHPERIMETERS", data: data });
    }
  };
};

const mapStateToProps = state => {
  return {
    ObjectSearch: state.ObjectSearch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
