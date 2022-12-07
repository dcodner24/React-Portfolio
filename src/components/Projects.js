import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/collabProjects/codeBank.png";
import projImg1 from "../assets/img/collabProjects/parkPicker.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const collabProjects = [
    {
      description: "Park Picker: An interactive webapp for exploring National Parks across the United States.",
      imgUrl: projImg1,
      liveSite: "https://chewy441014.github.io/trail-picker/"
    },
    {
      description: "Design & Development",
      imgUrl: projImg2,
      liveSite: "https://code-bank-bc.herokuapp.com/"
    }
  ];

  const repoLinks = [
    {
      description: "Park Picker: An interactive webapp for exploring National Parks across the United States.",
      imgUrl: projImg1,
      liveSite: "https://github.com/chewy441014/trail-picker"
    },
    {
      description: "A user-friendly mock banking application that allows users to easily deposit, pay, and transfer funds between accounts on the platform.",
      imgUrl: projImg2,
      liveSite: "https://github.com/dcodner24/Code-Bank"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These are the projects I have completed so far, feel free to browse through them too see the different technologies I have worked with.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Repos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Resume</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            collabProjects.map((project, index) => {
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
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            repoLinks.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        {
                          <button className="resumeButton" onClick={() => window.open("https://drive.google.com/file/d/18JzCV5uOQnlPVqi-ljCcwuKjpmgDL9v-/view?usp=share_link")}><span>View Resume</span></button>
                        }
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
