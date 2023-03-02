import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import marvel from "../assets/img/marvel.jpg";
import hero from "../assets/img/hero.png";
import quiz from "../assets/img/quiz.png";
import cocktails from "../assets/img/cocktails.jpg";
import shopping from "../assets/img/shopping.png";
import water from "../assets/img/water.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: 'Marvel',
      description: "Marvel Characters App with Comics",
      imgUrl: marvel,
      link: "https://belchinskaya.github.io/Marvel/",
    },
    {
      title: 'Heroes',
      description: "Redux Toolkit App",
      imgUrl: hero,
      link: "https://heroeslist.netlify.app/",
    },
    {
      title: "Quiz App",
      description: "React Quiz App",
      imgUrl: quiz,
      link: "https://cheerful-moxie-90864f.netlify.app/",
    },
    {
      title: "Cocktails",
      description: "App with Cocktail DB",
      imgUrl: cocktails,
      link: "https://cocktail-db-belchynska.netlify.app/",
    },
    {
      title: "Shopping Cart",
      description: "Shopping App on Typescript",
      imgUrl: shopping,
      link: "https://shopping-cart-belchynska.netlify.app/",
    },
    {
      title: "Drink Water",
      description: "App with Creative CSS",
      imgUrl: water,
      link: "https://main--velvety-paletas-6fc6a7.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you to all the big and small websites I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
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
                    {/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt={colorSharp2} ></img>
    </section>
  )
}
