import Project from "./models/Project";
import Person from "./models/Person";

const express = require("express");
const app = express();

const jerrelSogoni = new Person("Jerrel", "Sogoni");
jerrelSogoni.addSite("website", "https://jerrelsogoni.com/");
const brettPorcelli = new Person("Brett", "Porcelli");
brettPorcelli.addSite("website", "https://bporcelli.com/");
const justinSogoni = new Person("Justin", "Sogoni");
const danielSoh = new Person("Daniel", "Soh");
const janeThomas = new Person("Jane", "Thomas");
const projects = [];

const personalWebsiteAngular = new Project("Personal Angular Website");
personalWebsiteAngular.addProjectLeadership("Creator", jerrelSogoni);
personalWebsiteAngular.addImage("main", "./jerrelWebsite.png");
personalWebsiteAngular.description =
  "My website is written using Angular 2 for the front end design and PHP for the backend process. My website dynamically pulled from MySQL Database. Emailing service uses POST method to get form information to send out an email to me. Learned core concepts of Angular 2 and PHP.";
personalWebsiteAngular.addLinks(
  "github",
  "https://github.com/JerrelSogoni/My-Website"
);
personalWebsiteAngular.startDate = new Date(2017, 6, 9);
personalWebsiteAngular.endDate = new Date(2017, 6, 28);

const personalWebsiteReact = new Project("Personal React Website");
personalWebsiteReact.addProjectLeadership("Creator", jerrelSogoni);
personalWebsiteReact.addImage("main", "./jerrelWebsiteReact.png");
personalWebsiteReact.description =
  "My website is written using React JS and Node JS.";
personalWebsiteReact.addLinks(
  "github",
  "https://github.com/JerrelSogoni/JerrelSogoniWebsite"
);
const umlApplication = new Project(
  "JClassDesigner UML Diagram Java Application"
);
umlApplication.addProjectLeadership("Creator", jerrelSogoni);
umlApplication.addImage("main", "./uml.png");
umlApplication.description =
  "This project was given from Stony Brook's Course, CSE 219 Computer Science III, which is a Java written application using JavaFX framework. The project follows a MVC, model view controller, design pattern. This project aims to make UML diagrams and export java boilerplate code extracted from the application.";
umlApplication.startDate = new Date(2016, 3, 31);
umlApplication.endDate = new Date(2016, 5, 9);
const lawnMoverApplication = new Project("Lawn Mower Game MIPS Assembly Code");
lawnMoverApplication.addProjectLeadership("Creator", jerrelSogoni);
lawnMoverApplication.addImage("main", "./mips.png");
lawnMoverApplication.description =
  "This project was given from a Stony Brook's Course, CSE 220, which was a lawn mower game written in MIPS Assembly Code. It would detect if a box color was not bold then mow it to bold it indicating that is mowed already. This game test for collision control such as the mower cannot go through water -> blue boxes.";
lawnMoverApplication.startDate = new Date(2015, 10, 20);
lawnMoverApplication.endDate = new Date(2015, 11, 10);

const hydroPiOnics = new Project("Raspberry Pi Automated Hydroponics System");
hydroPiOnics.addProjectLeadership("Creator", jerrelSogoni);
hydroPiOnics.addCollaborator(justinSogoni);
hydroPiOnics.addImage("main", "./hydroponics.jpg");
hydroPiOnics.description =
  "This Raspberry Pi project's purpose is to create a self flourishable environment for any plant to grow using the Raspberry Pi to control necessary components such as sensors and water pumps and much more. In addition, creating a Python GUI made from scratch with the boa constructor application to create the front-end code. This project follows a MVC design pattern and is solely written in Python.";
hydroPiOnics.startDate = new Date(2016, 6, 26);
hydroPiOnics.endDate = new Date(2016, 8, 15);
hydroPiOnics.addLinks("github", "https://github.com/JerrelSogoni/HydroPiOnics");
const profilePlus = new Project("Profile Plus");
profilePlus.addCollaborator(jerrelSogoni);
profilePlus.addCollaborator(danielSoh);
profilePlus.addCollaborator(janeThomas);
profilePlus.addImage("main", "./profileplus.png");
profilePlus.description =
  "Project made in CSE 305, Principles of Database System course, at Stony Brook University. Profile Plus is a social media site. Users can register, message others, post on other user's post, create groups, join groups. I collaborated with 2 fellow Stony Brook Students. I primarily worked on the front-end design using XHTML, CSS, and Bootstrap framework. I also worked on the backend with the interaction with the database, we used JavaFaces (JSF) and MySQL and also follows a MVC design pattern.";
profilePlus.startDate = new Date(2016, 11, 21);
profilePlus.endDate = new Date(2016, 12, 9);
profilePlus.addLinks("github", "https://github.com/JerrelSogoni/Profile-");
const sbuIfy = new Project("SBUify");
sbuIfy.addCollaborator(jerrelSogoni);
sbuIfy.addCollaborator(brettPorcelli);
sbuIfy.addCollaborator(danielSoh);
sbuIfy.addImage("main", "./cse308.png");
sbuIfy.description =
  "CSE 308 group project using Spring MVC backend and Angular 2 frontend.";
sbuIfy.startDate = new Date(2017, 10, 27);
sbuIfy.endDate = new Date(2017, 11, 12);

projects.push(
  personalWebsiteAngular,
  personalWebsiteReact,
  umlApplication,
  lawnMoverApplication,
  hydroPiOnics,
  profilePlus,
  sbuIfy
);

app.get("/api/projects", (req, res) => {
  res.send(projects);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
