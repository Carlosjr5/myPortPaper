import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1Imagen from "../assets/img/pj1-Assembly.jpg";
import proj2Imagen from "../assets/img/crontabimg.jpg";
import proj3Imagen from "../assets/img/sem.jpg";
import proj4Imagen from "../assets/img/connect-4.jpg";
import proj5Imagen from "../assets/img/habits.jpg";

import proj7Imagen from "../assets/img/napierbank-2.png";

import proj9Imagen from "../assets/img/pong-2.png";
import proj10Imagen from "../assets/img/fizh&chipss-2.png";

import proj12Imagen from "../assets/img/EnergySysteem-2.png";
import proj13Imagen from "../assets/img/carloskiwi.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { PlayBtn } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: " Computer Systems - Assembly Game Hi-Lo",
      description: " That is a simple ARM32 Assembly written Higher - Lower  card game, which takes two integer inputs. Each number represents a card and each card have its strength.      The program just compares the numbers and then returns a string which tells the user which card is stronger/weaker. The idea of writing a small game in  Assembly was to teach some basics about CPU architecture. Learning a low level language gave me the opportunity to understand in depth the core concepts of programming, as you have to declare and write the code behind all the simple tasks that are already pre-written for you in most of the programming languages.  ",
      imgUrl: proj1Imagen,
      
    },
    {
      title: "Operating Systems - Crontab - Task Manager",
      description: "This project is based on Linux bash which is a Unix shell and command language written by Brian Fox for the GNU Project, using Crontab which is a command-line utility with a job scheduler on Unix-like operating systems. Users who set up and maintain software environments use cron to schedule jobs, also known as cron jobs, to run periodically at fixed times, dates, or intervals, and basically this system it allows you to insert a job that you need to complete within the minute,hour,day of the month, month, and day of the week, as well you are able to edit that task or remove it, you can visualize all the jobs you inputed so you can remove all jobs as well by one click.",
      imgUrl: proj2Imagen,
    },
    {
      title: "Software Engineering Methods",
      description: "I worked for an organisation that requires reporting on population information. I have been tasked with designing and implementing a new system to allow easy access to this population information. The organisation has provided an SQL database to work from in order to get details out from it using Java, filtering the results the organization wanted to get from the database using Docker.",
      imgUrl: proj3Imagen,
    },
    {
      title: "Algorithms and Data Structures - Connect 4 Game",
      description: "This game is developed in order to demonstrate the understanding of both theory and practise in relation to the content of the Algorithms and Data Structures. The task is to implement a simple, command-line only (no GUI or graphics) version of the “Connect Four”, game using the C programming language, with the ability to play against the CPU so it has its own AI. ",
      imgUrl: proj4Imagen,
    },
    {
      title: "Mobile Application Development - Android Studio",
      description: "This is an app where you can keep on track of what you need to do and for when, as well it has a feature to set alarms, update the task or delete it, and a method which help to keep the motivation on, which is a timer of 25 minutes for the time of completing a task and getting notified by the app to have a rest and continue, this application is developed using Java and Firebase to store the data.",
      imgUrl: proj5Imagen,
    },
    {
      title: "Object Oriented Software Development - Track&Trace",
      description: "This project has its design and implementation of a prototype for a track-and-trace system that will allow users to keep track of individuals with whom they have come into contact with and places that they have been. Track&Trace have a number of users, users will have a unique ID and phone number. The system will record events that are associated with each user. Events fall into two types:  ·       A contact occurs when two users have come into contact. Each contact records, the date and time of the contact and the two individuals involved.  ·       A visit occurs when a user checks in at a particular location Each visit should record  the user, the date time of the visit and the location.   The system also allow the creation of locations (shops, cafes etc). This project is developed using the programming language C# and using the CSV file to store the data with commas.",
      imgUrl: proj10Imagen,
    },
    {
      title: "Napier Bank Service",
      description: "",
      imgUrl: proj7Imagen,
    },
    {
      title: "Game Engineeering",
      description: "Clasic game Pong developed using C++ and CMake enginee.",
      imgUrl: proj9Imagen,
    },
    {
      title: "Game Engineeering",
      description: "Fizh&Chips its a game that is developed using C++ and CMake engine by Angel Tenev & Carlos Jiménez.",
      imgUrl: proj10Imagen,
    },
    {
      title: "Software Architecture",
      description: "Design & Development of a server with a database using Java and MySQL",
      imgUrl: proj13Imagen,
    },
    {
      title: "Multi-Agent System",
      description: "System developed using C# and the ActressMAS framework in order to allow the agents to comunicate between them, and adding a Second-price bid auction protocol in order to make a p2p energy system determinating a number of households, depending on their demand will become buyer or seller and the market will open and agents will be changing bids between them saving a cost of buying the energy from the main source, while buying it form another household, both houses wins in terms of selling it for a higher price, and the other buying it for a lower price. ",
      imgUrl: proj12Imagen,
      href: "https://www.linkedin.com/in/carlos-jimenez-rodriguez-3b7081228",
    },
   

   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this section I am showing different projects i have been working on which are based on the skills shown before, which appears on my GitHub Page.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>

                   

                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Opinion About Technology</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Technology has revolutionized the way we live, work, and communicate. From the development of the wheel to the invention of the internet, technology has played a central role in human progress and continues to shape the world we live in.</p>
                  <p>One of the most significant impacts of technology has been the ability to connect people from all over the world through the internet and social media. This has made it easier to share ideas, collaborate on projects, and stay in touch with loved ones, regardless of location.</p>
                  <p>Technology has also had a major impact on the way we do business. With the rise of e-commerce and online platforms, it's easier than ever for people to start and run their own businesses, and for consumers to shop for products and services from the comfort of their own homes.</p>
                  <p>In many fields, technology has also made it possible to automate tasks and streamline processes, increasing efficiency and productivity. This has had a major impact on industries such as manufacturing, transportation, and healthcare.</p>
                  <p>Overall, technology has had a huge impact on our daily lives and will continue to shape the way we live and work in the future.</p>
                     </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
