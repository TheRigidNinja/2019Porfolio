import React, { Component } from 'react';
import "../css/Projects.css"
import ProjectBox from "./ProjectBox"

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

export default class Project extends Component{
  state = {
    idType: "data1",
    filterObj: "All",
    filterType: ["All","Website","HTML/CSS/SASS","Node.js","React/Redux","JavaScript/jQuery","Python"]
  }

  handleFilterClick=(e)=>{
    let container = document.querySelector(".Project"),
        elment = e.target;

    console.log(elment.innerHTML)
    if(this.state.filterObj !== elment.innerHTML && this.state.filterType.includes(elment.innerHTML)){
        container.style.opacity="0";
        container.style.top="180px";

      setTimeout(()=>{
        this.setState({
          filterObj:elment.innerHTML,
          idType: this.ToggleFilterActive(elment)
        },()=>{
          setTimeout(()=>{
            container.style.opacity="1"
            container.style.top="220px"
          },500)
        })
      },350)

    }
  }


  ToggleFilterActive = (elm) =>{
    if(this.state.filterType.includes(elm.innerHTML)){
      document.getElementById(this.state.idType).className="";
      elm.className="ActiveFilter";
      return elm.getAttribute("id")
    }
  }

  render() {
    return (
      <div>
        <div className="FilterBar" onClick={(e)=>this.handleFilterClick(e)}>
          <span id="data1" className="ActiveFilter">All</span>
          <span id="data2">Website</span>
          <span id="data3">HTML/CSS/SASS</span>
          <span id="data4">Node.js</span>
          <span id="data5">React/Redux</span>
          <span id="data6">JavaScript/jQuery</span>
          <span id="data7">Python</span>
          {/* <input/> */}
        </div>

        <div className="row Project">
        
          <ProjectBox Tech={["Node.js","HTML5","SASS (Flexbox)","Firebase-Auth","React/Redux","MySQL"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Chatome",
            "Launch":"https://chatappe.herokuapp.com/",
            "Source":"https://github.com/TheRigidNinja/Chatome",
            "IMG":ChatApp,
            "Description":"A chat application.  I was motivated to make it because i aimed to put everything I had learned to practice. "}]}/>
              
          <ProjectBox Tech={["React/Redux","jQuery","HTML","CSS","Material Ui", "Firebase-FireStore"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"TODO'S",
            "Launch":"https://therigidninja.firebaseapp.com/",
            "Source":"https://github.com/TheRigidNinja/React_TodoList/tree/Todo's-Adcanced/todo_app",
            "IMG":Todos,
            "Description":"A simple Todo's web app."}]}/>

          <ProjectBox Tech={["Sass (Flexbox)","jQuery","HTML"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"App Landing Page - Site",
            "Launch":"https://therigidninja.github.io/App-landing-page/",
            "Source":"https://github.com/TheRigidNinja/App-landing-page",
            "IMG":Applanding,
            "Description":"An app landing page. I made it to practice, translating mockups designs, to HTML CSS code."}]}/>

          <ProjectBox Tech={["CSS","JavaScript","HTML"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Slither Classic",
            "Launch":"https://old-portfolio-998bc.firebaseapp.com/Slither-Classic/index.html",
            "Source":"https://github.com/TheRigidNinja/Slither-Classic",
            "IMG":SlitherClassic,
            "Description":"I was inspired by the mechanics of classic Snake and Slither.io, and so as a result, I made this game."}]}/>

           <ProjectBox Tech={["React/Redux","HTML","CSS"]}
            FilterCommands = {this.state.filterObj}
            Details={[{
              "Header":"Old Portfolio2 - Site",
              "Launch":"https://reactportfolio-e3bad.firebaseapp.com/",
              "Source":"https://github.com/TheRigidNinja/React_Portfolio",
              "IMG":OldPortfolio2,
              "Description":"My old portfolio."}]}/>

          <ProjectBox Tech={["CSS (Flexbox)","jQuery","HTML"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Pizza - Site",
            "Launch":"https://therigidninja.github.io/PizzaWebsite/",
            "Source":"https://github.com/TheRigidNinja/PizzaWebsite",
            "IMG":Pizza,
            "Description":"The aimed was to improve my knowledge, skills in CSS Flexbox and the general way I style elements. As a result i made this Pizza website to reflect on it."}]}/>

          <ProjectBox Tech={["CSS","JavaScript","HTML"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Defender",
            "Launch":"https://old-portfolio-998bc.firebaseapp.com/Defender/index.html",
            "Source":"https://github.com/TheRigidNinja/Battle-ship",
            "IMG":Defender,
            "Description":"A  space invader style game. It gives the player a challenge to survive as long as they can without touch the red circles."}]}/>

          <ProjectBox Tech={["Firebase - DB","HTML (SVG)","CSS","jQuery","Boostrap 4"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Old Portfolio - Site",
            "Launch":"https://old-portfolio-998bc.firebaseapp.com/Portfolio/index.html",
            "Source":"https://github.com/TheRigidNinja/Portfolio-2.0",
            "IMG":OldPortfolio,
            "Description":"A place to view my old projects."}]}/>

          <ProjectBox Tech={["Boostrap 4","JavaScript","CSS","Firebase-Realtime - DB","Excel (VBA)"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Inventory System",
            "Launch":"https://old-portfolio-998bc.firebaseapp.com/Inventory-System/index.html",
            "Source":"https://github.com/TheRigidNinja/VideoProduction",
            "IMG":VidoeProduction,
            "Description":"A web app that helps teachers and students with the process of borrowing video production equipments."}]}/>

          <ProjectBox Tech={["Python","C# (Bunifu ui)"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Auto Trade",
            "Launch":"https://github.com/TheRigidNinja/CSharp-AutoTrader",
            "Source":"https://github.com/TheRigidNinja/CSharp-AutoTrader",
            "IMG":AutoTrade,
            "Description":"A share market Bot that automatically makes trades, base on market trends on \"MyASX\" share market game."}]}/>
    
          <ProjectBox Tech={["React/Redux","HTML","CSS (Flexbox)"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"This Portfolio - Site",
            "Launch":"##",
            "Source":"https://github.com/TheRigidNinja/2019Porfolio",
            "IMG":ThisPortfolio,
            "Description":"You looking at it 😁"}]}/>
      
          <ProjectBox Tech={["JavaScript","HTML","CSS"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Memory Game",
            "Launch":"https://old-portfolio-998bc.firebaseapp.com/Portfolio/assets/Projects/Memory-Game/index.html",
            "Source":"https://github.com/TheRigidNinja/Memory-Game",
            "IMG":Memory,
            "Description":"A simple memory game."}]}/>      

          <ProjectBox Tech={["JavaScript","HTML","CSS"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"V2 Rocket - Site",
            "Launch":"https://old-portfolio-998bc.firebaseapp.com/Portfolio/assets/Projects/V2Rocket/index.html",
            "Source":"https://github.com/TheRigidNinja/V2Rocket/tree/master/V2Rocket",
            "IMG":V2Site,
            "Description":"A history of V2 Rocket which also includes an interactive simulation."}]}/>

          <ProjectBox Tech={["JavaScript","HTML","CSS"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Tanky",
            "Launch":"https://old-portfolio-998bc.firebaseapp.com/Portfolio/assets/Projects/Tanky/index.html",
            "Source":"https://github.com/TheRigidNinja/Tanky/tree/master/Tanky",
            "IMG":Tanki,
            "Description":"A 2D Tank Simulation."}]}/>

          <ProjectBox Tech={["Python","C#"]}
          FilterCommands = {this.state.filterObj}
          Details={[{
            "Header":"Gmail Unsubscriber",
            "Launch":"https://github.com/TheRigidNinja/Unsubscriber",
            "Source":"https://github.com/TheRigidNinja/Unsubscriber",
            "IMG":Unsubscriber,
            "Description":"An application that unsubscribes, blocks and deletes Gmail spams. It also affects any email that is not classified and important."}]}/>
        </div>
      </div>
    )
  }
}
