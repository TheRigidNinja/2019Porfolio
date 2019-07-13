import React, { Component } from "react";
import ChatApp from "../IMG/Chat_app.jpg";
import Applanding from "../IMG/ApplandingPage.jpg";
import Todos from "../IMG/Todos.jpg";
import SlitherClassic from "../IMG/SlitherClassic.jpg";
import Pizza from "../IMG/pizza.jpg";
import Defender from "../IMG/Defender.jpg";
import OldPortfolio from "../IMG/OldPortfolio.jpg";
import OldPortfolio2 from "../IMG/OldPortfolio2.jpg";
import VidoeProduction from "../IMG/VidoeProduction.jpg";
import AutoTrade from "../IMG/AutoTrade.jpg";
import ThisPortfolio from "../IMG/ThisPortfolio.jpg";
import Memory from "../IMG/Memory.jpg";
import V2Site from "../IMG/V2Site.jpg";
import Tanki from "../IMG/Tanki.jpg";
import Unsubscriber from "../IMG/Unsubscriber.jpg";

import ProjectBox from "./ProjectBox";
import { connect } from "react-redux";

class ProjectRenderer extends Component {
  state = {};
  render() {
    const ProjectElments = {
      project1: {
        Tech: [
          "Node.js",
          "HTML5",
          "SASS (Flexbox)",
          "Firebase-Auth",
          "React/Redux",
          "MySQL"
        ],
        Details: {
          Header: "Chatome",
          Launch: "https://chatapp-66db3.firebaseapp.com",
          Source: "https://github.com/TheRigidNinja/Chatome",
          IMG: ChatApp,
          Description:
            "A chat web application.  It provides the ability to communicate with multiple people online privately."
        }
      },
      project2: {
        Tech: [
          "React/Redux",
          "jQuery",
          "HTML",
          "CSS",
          "Material Ui",
          "Firebase-FireStore"
        ],
        Details: {
          Header: "TODO'S",
          Launch: "https://therigidninja.firebaseapp.com/",
          Source:
            "https://github.com/TheRigidNinja/React_TodoList/tree/Todo's-Adcanced/todo_app",
          IMG: Todos,
          Description: "A todo list web app."
        }
      },
      project3: {
        Tech: ["Sass (Flexbox)", "jQuery", "HTML"],
        Details: {
          Header: "App Landing Page - Site",
          Launch: "https://therigidninja.github.io/App-landing-page/",
          Source: "https://github.com/TheRigidNinja/App-landing-page",
          IMG: Applanding,
          Description:
            "An app landing page. I made it to practice, translating mockups designs, to HTML CSS code."
        }
      },
      project4: {
        Tech: ["CSS", "JavaScript", "HTML"],
        Details: {
          Header: "Slither Classic",
          Launch:
            "https://old-portfolio-998bc.firebaseapp.com/Slither-Classic/index.html",
          Source: "https://github.com/TheRigidNinja/Slither-Classic",
          IMG: SlitherClassic,
          Description:
            "A game that derives its mechanics from classic Snake and Slither.io"
        }
      },
      project5: {
        Tech: ["React/Redux", "HTML", "CSS"],
        Details: {
          Header: "Old Portfolio2 - Site",
          Launch: "https://reactportfolio-e3bad.firebaseapp.com/",
          Source: "https://github.com/TheRigidNinja/React_Portfolio",
          IMG: OldPortfolio2,
          Description: "My old portfolio."
        }
      },
      project6: {
        Tech: ["CSS (Flexbox)", "jQuery", "HTML"],
        Details: {
          Header: "Pizza - Site",
          Launch: "https://therigidninja.github.io/PizzaWebsite/",
          Source: "https://github.com/TheRigidNinja/PizzaWebsite",
          IMG: Pizza,
          Description:
            "A pizza website. I was motivated to make it because i wanted to improve my knowledge and skills in CSS Flexbox."
        }
      },
      project7: {
        Tech: ["CSS", "JavaScript", "HTML"],
        Details: {
          Header: "Defender",
          Launch:
            "https://old-portfolio-998bc.firebaseapp.com/Defender/index.html",
          Source: "https://github.com/TheRigidNinja/Battle-ship",
          IMG: Defender,
          Description: "A  space invader style game."
        }
      },
      project8: {
        Tech: ["Firebase - DB", "HTML (SVG)", "CSS", "jQuery", "Boostrap 4"],
        Details: {
          Header: "Old Portfolio - Site",
          Launch:
            "https://old-portfolio-998bc.firebaseapp.com/Portfolio/index.html",
          Source: "https://github.com/TheRigidNinja/Portfolio-2.0",
          IMG: OldPortfolio,
          Description: "My second portfolio. I made it with bootstrap studio."
        }
      },
      project9: {
        Tech: [
          "Boostrap 4",
          "JavaScript",
          "CSS",
          "Excel (VBA)",
          "Firebase-Realtime - DB"
        ],
        Details: {
          Header: "Inventory System",
          Launch:
            "https://old-portfolio-998bc.firebaseapp.com/Inventory-System/index.html",
          Source: "https://github.com/TheRigidNinja/VideoProduction",
          IMG: VidoeProduction,
          Description:
            "A web app that helps teachers and students with the process of borrowing video production equipments."
        }
      },
      project10: {
        Tech: ["Python", "C# (Bunifu ui)"],
        Details: {
          Header: "Auto Trade",
          Launch: "https://github.com/TheRigidNinja/CSharp-AutoTrader",
          Source: "https://github.com/TheRigidNinja/CSharp-AutoTrader",
          IMG: AutoTrade,
          Description:
            'A share market Bot that automatically makes trades, base on market trends on "MyASX" share market game.'
        }
      },
      project11: {
        Tech: ["React/Redux", "HTML", "CSS (Flexbox)"],
        Details: {
          Header: "This Portfolio - Site",
          Launch: "##",
          Source: "https://github.com/TheRigidNinja/2019Porfolio",
          IMG: ThisPortfolio,
          Description: "You looking at it 😁"
        }
      },
      project12: {
        Tech: ["JavaScript", "HTML", "CSS"],
        Details: {
          Header: "Memory Game",
          Launch:
            "https://old-portfolio-998bc.firebaseapp.com/Portfolio/assets/Projects/Memory-Game/index.html",
          Source: "https://github.com/TheRigidNinja/Memory-Game",
          IMG: Memory,
          Description: "A simple memory game."
        }
      },
      project13: {
        Tech: ["JavaScript", "HTML", "CSS"],
        Details: {
          Header: "V2 Rocket - Site",
          Launch:
            "https://old-portfolio-998bc.firebaseapp.com/Portfolio/assets/Projects/V2Rocket/index.html",
          Source:
            "https://github.com/TheRigidNinja/V2Rocket/tree/master/V2Rocket",
          IMG: V2Site,
          Description:
            "A website about the history of V2 Rocket. It has an interactive simulation. Made in vanilla JavaScript"
        }
      },
      project14: {
        Tech: ["JavaScript", "HTML", "CSS"],
        Details: {
          Header: "Tanky",
          Launch:
            "https://old-portfolio-998bc.firebaseapp.com/Portfolio/assets/Projects/Tanky/index.html",
          Source: "https://github.com/TheRigidNinja/Tanky/tree/master/Tanky",
          IMG: Tanki,
          Description: "A 2D Tank Simulation."
        }
      },
      project15: {
        Tech: ["Python", "C#"],
        Details: {
          Header: "Gmail Unsubscriber",
          Launch: "https://github.com/TheRigidNinja/Unsubscriber",
          Source: "https://github.com/TheRigidNinja/Unsubscriber",
          IMG: Unsubscriber,
          Description:
            "An application that unsubscribes, blocks and deletes Gmail spams. It also affects any email that is not classified and important."
        }
      }
    };

    this.props.ObjectSearch(ProjectElments);

    // Searching Mechanism, Perimeters from portfolio search bar
    const ProjectFilteredElments = (() => {
      let tempSearchPerimeters = this.props.SearchPerimeters,
        tempProjectElments = Object.keys(ProjectElments);

      // Putting project in order caming with Search Perimeters
      if (
        tempSearchPerimeters &&
        tempSearchPerimeters.Filter.length === tempProjectElments.length
      ) {
        tempProjectElments = tempSearchPerimeters.Filter;
      }
      return tempProjectElments;
    })();

    // ProjectElments  << -- Create a clone of that so you can search
    return ProjectFilteredElments.map(elm => {
      let order = this.props.SearchPerimeters,
        special = order && order.Ordered.includes(elm) ? true : false;

      return (
        <ProjectBox
          key={Math.random()}
          Tech={ProjectElments[elm].Tech}
          Details={ProjectElments[elm].Details}
          ProjectElment={this.props.ProjectElment}
          FeedBack={this.props.FeedBack}
          SelectedClass={special}
        />
      );
    });
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ObjectSearch: data => {
      dispatch({ type: "OBJECTSEARCH", data: data });
    }
  };
};

const mapStateToProps = state => {
  return {
    SearchPerimeters: state.SearchPerimeters,
    FeedLength: state.FeedLength
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectRenderer);
