import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ex1.jpeg";
import projImg2 from "../assets/img/ex2.png";
import projImg3 from "../assets/img/ex3.png";
//import projImg4 from "../assets/img/ex4.jpg";
import projImg5 from "../assets/img/ex5.png";
import projImg6 from "../assets/img/ex7.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Telecommuniation",
      description: "One of the foremost mobile service providers in Sri Lanka",
      imgUrl: projImg1,
    },
    {
      title: "Education",
      description: "World’s leading learning company, serving customers in nearly 200 countries with digital content",
      imgUrl: projImg2,
    },
    {
      title: "IT Services and IT Consulting",
      description: "Offering Web Solutions, E-Commerce, Software Solutions and SEO with latest technologies",
      imgUrl: projImg3,
    },
   
    {
      title: "IT Services and IT Consulting",
      description: "Virtusa Corporation provides digital engineering and technology services to Forbes Global 2000 companies worldwide",
      imgUrl: projImg6,
    },
    {
      title: "Online Audio and Video Media",
      description: "Online Publishing, Media, Content, and News",
      imgUrl: projImg5,
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
                <p>3+ years of experience working in multinational companies with foreign customers and companies.</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Contact me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About</Nav.Link>
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
                      <p>I am a passionate software engineer with nine years of exposure in the field of information and technology.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I have acquired more than Three years of experience in the field of application support, During
                        this period my exposure to various Domains and Architecture was immeasurable. Especially in telco, E-learning, Transportation and Logistics,Finance and Billing, and Health are noteworthy</p>
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
