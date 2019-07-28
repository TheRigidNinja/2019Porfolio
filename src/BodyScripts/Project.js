import React, { Component } from "react";

import "../css/Projects.css";
import FeedBack from "./FeedbackSection/Feedback";
import ProjectRenderer from "./ProjectRenderer";

export default class Project extends Component {
  state = {
    parent: null,
    children1: null,
    children2: null,
    elmIndex: null,
    feedID: "generalFeed",
    renderType: ""
  };

  // Handle element Click Action
  ProjectElment = e => {
    let Elm = e.target,
      class1 =
        Elm.parentNode.parentNode.classList[0] === "Box"
          ? Elm.parentNode.parentNode
          : null,
      class2 = Elm.parentNode.classList[0] === "Box" ? Elm.parentNode : null,
      class3 = Elm.classList[0] === "Box" ? Elm : null,
      parent = class1 || class2 || class3;

    if (e.target.className === "imgBox") {
      var children = parent.querySelectorAll("DIV");

      // if (this.state.elmIndex !== elmIndex) {
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
        children2: children[2]
      });
      // }
    } else if (
      e.target.className === "Details" ||
      e.target.parentElement.className === "Details"
    ) {
      parent.querySelector(".Launch").click();
    }
  };

  // HANDLES FeedBack
  FeedBack = elm => {
    var feedback = document.querySelector(".FeedBackClass"),
      root = document.querySelector("#root"),
      close = document.querySelector(".fa-times");

    if (elm !== "Remove") {
      feedback.classList.add("feedBackSection");
      close.style.display = "block";

      root.classList.add("feedBACK");
      this.setState({
        feedID: elm
      });
    } else {
      feedback.classList.remove("feedBackSection");
      root.classList.remove("feedBACK");
      close.style.display = "none";
      this.setState({
        feedID: "generalFeed"
      });
    }
  };

  // Handles Filter Events ----->
  render() {
    return (
      <>
        <div className="row Project">
          <ProjectRenderer
            ProjectElment={this.ProjectElment}
            FeedBack={this.FeedBack}
          />
        </div>
        <FeedBack feedID={this.state.feedID} FeedBack={this.FeedBack} />
      </>
    );
  }
}
