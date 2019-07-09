import React, { Component } from "react";
import "../css/Projects.css";
import ProjectBox from "./ProjectBox";

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
import FeedBack from "./FeedbackSection/Feedback";

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
      indexNum: 1,
      Header: "Chatome",
      Launch: "https://chatapp-66db3.firebaseapp.com",
      Source: "https://github.com/TheRigidNinja/Chatome",
      IMG: ChatApp,
      Description:
        "A chat web application.  It provides the ability to communicate with multiple people online privately."
    }
  },
  project2: {
    Tec: [
      "React/Redux",
      "jQuery",
      "HTML",
      "CSS",
      "Material Ui",
      "Firebase-FireStore"
    ],
    Details: {
      indexNum: 2,
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
      indexNum: 3,
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
      indexNum: 4,
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
      indexNum: 5,
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
      indexNum: 6,
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
      indexNum: 7,
      Header: "Defender",
      Launch: "https://old-portfolio-998bc.firebaseapp.com/Defender/index.html",
      Source: "https://github.com/TheRigidNinja/Battle-ship",
      IMG: Defender,
      Description: "A  space invader style game."
    }
  },
  project8: {
    Tech: ["Firebase - DB", "HTML (SVG)", "CSS", "jQuery", "Boostrap 4"],
    Details: {
      indexNum: 8,
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
      "Firebase-Realtime - DB",
      "Excel (VBA)"
    ],
    Details: {
      indexNum: 9,
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
      indexNum: 10,
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
      indexNum: 11,
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
      indexNum: 12,
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
      indexNum: 13,
      Header: "V2 Rocket - Site",
      Launch:
        "https://old-portfolio-998bc.firebaseapp.com/Portfolio/assets/Projects/V2Rocket/index.html",
      Source: "https://github.com/TheRigidNinja/V2Rocket/tree/master/V2Rocket",
      IMG: V2Site,
      Description:
        "A website about the history of V2 Rocket. It has an interactive simulation. Made in vanilla JavaScript"
    }
  },
  project14: {
    Tech: ["JavaScript", "HTML", "CSS"],
    Details: {
      indexNum: 14,
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
      indexNum: 15,
      Header: "Gmail Unsubscriber",
      Launch: "https://github.com/TheRigidNinja/Unsubscriber",
      Source: "https://github.com/TheRigidNinja/Unsubscriber",
      IMG: Unsubscriber,
      Description:
        "An application that unsubscribes, blocks and deletes Gmail spams. It also affects any email that is not classified and important."
    }
  }
};

var indexHold = null; 

export default class Project extends Component {
  state = {
    parent: null,
    children1: null,
    children2: null,
    elmIndex: null,
    feedID: "generalFeed",
    renderType: ""
  };

  componentDidMount() {
    // Adding event lesteners to feedback element
    var feedback = document.querySelectorAll(".Feedback");
    var cnt = 0;
    feedback.forEach(element => {
      var elmh2 = element.parentElement.parentElement.parentElement.parentElement.querySelector(
          "h2"
        ).innerText,
        uniqueKey = (elmh2 + (cnt += 1)).toLocaleLowerCase().replace(/\s/g, "");

      element.addEventListener("click", () => this.FeedBack(uniqueKey));
    });

    document
      .querySelector(".FeedBackClass")
      .addEventListener("click", event => {
        if (event.target.classList[0] === "FeedBackClass") {
          this.FeedBack("Remove");
        }
      });
  }

  // Handle element Click Action
  ProjectElment = (e, elmIndex) => {
    const parent = document.querySelectorAll(".Box")[elmIndex - 1];

    if (e.target.className === "imgBox") {
      var children = parent.querySelectorAll("DIV");

      if (this.state.elmIndex !== elmIndex) {
        indexHold = elmIndex;
        if (this.state.parent) {
          this.state.parent.removeAttribute("id", "activeBox");
          this.state.children1.removeAttribute("id", "activeMoreDetails");
          this.state.children2.removeAttribute("id", "activeDetails");
        }

        parent.setAttribute("id", "activeBox");
        children[1].setAttribute("id", "activeMoreDetails");
        children[2].setAttribute("id", "activeDetails");

        this.setState({
          parent: parent,
          children1: children[1],
          children2: children[2],
          elmIndex: elmIndex
        });
      }
    } else if (
      e.target.className === "Details" ||
      e.target.parentElement.className === "Details"
    ) {
      parent.querySelector(".Launch").click();
    }
  };


  shouldComponentUpdate(){
    console.log(this.state.feedID);
    console.log(this.state);

    console.log(indexHold);

    if(this.state.feedID === "generalFeed" && indexHold){
      return false
    }else{
      indexHold = null;
      return true
    }
  }

  // HANDLES FeedBack
  FeedBack = elm => {
    var feedback = document.querySelector(".FeedBackClass"),
      root = document.querySelector("#root");

    if (elm !== "Remove") {
      feedback.classList.add("feedBackSection");
      root.classList.add("feedBACK");
      this.setState({
        feedID: elm
      });
    } else {
      feedback.classList.remove("feedBackSection");
      root.classList.remove("feedBACK");
      this.setState({
        feedID: "generalFeed"
      });
    }
  };

  // Handles Filter Events ----->
  render() {
    // ProjectElment:this.ProjectElment,
    // ProjectBox

    // ProjectElments  << -- Create a clone of that so you can search
    const ProjectRenderer = () => {
      return Object.keys(ProjectElments).map(elm => {
        return (
          <ProjectBox
            key={Math.random()}
            Tech={ProjectElments[elm].Tech}
            Details={ProjectElments[elm].Details}
            ProjectElment={this.ProjectElment}
          />
        );
      });
    };

    return (
      <>
        <div className="row Project">
          <ProjectRenderer />
        </div>
        <FeedBack feedID={this.state.feedID} />
      </>
    );
  }
}
