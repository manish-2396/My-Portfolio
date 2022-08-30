import React from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import transcript from '../media/Manish_Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const About = ({ darkMode }) => {

  return (
    <div className="about">
      <br></br>
      <br></br>
      <Fade>
        <Container align='center'>
          <Row>
            <Col lg={7} align='center'>
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title><h2 className="lead">Let's have an introduction!</h2></Card.Title>
                  <br></br>
                  <Card.Text>
                    <p style={{ fontSize: "17px", fontWeight: "500" }}>
                      Enthusiastic aspiring full-stack web developer
                      specialized in <strong>  MERN </strong>
                      stack  having fascination towards computer and technology.
                      Keen to create new and innovative websites by showcasing my skills.
                      Apart from that a great team player, ability to work with different
                      kinds of people with different thinkings.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <p style={{ fontSize: "17px", fontWeight: "500" }}>
                      I love to work on exciting projects that test what I've
                      learnt, whilst being exposed to the power and potential of the ever-evolving
                      technologies around us. I'm always looking for better, and more importantly,
                      ethical and accessible ways to solve the common problems we are faced with day-to-day.
                    </p>
                  </Card.Text>
                  <a href={transcript} target="_blank" rel="noreferrer noopener">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                      <FontAwesomeIcon className="dark" size="lg" icon={faFile} /> Resume
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5} align='center'>
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title><h2 className="lead">Let's Connect!</h2></Card.Title>
                  <br></br>

                  <div>
                    <h5 style={{ fontWeight: "500" }} >Manish Singh Chouhan  <br />At.Post-Baihar , Balaghat, Madhya Pradesh.<br /> Pin No : 481111 <br /> <strong style={{ fontWeight: "600" }}>7020949932</strong>
                      <br />
                      <strong style={{ fontWeight: "600" }}>manishchouhan2396@gmail.com</strong>
                    </h5>
                  </div>
                  <br />
                  <a className="social-icons" href="https://www.linkedin.com/in/manish-singh-chouhan-6b823620b/" target="_blank" rel="noreferrer noopener">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                      <FontAwesomeIcon className="dark" size="lg" icon={faLinkedinIn} />
                    </Button>
                  </a>
                  <a className="social-icons" href="https://github.com/manishchouhan2396" target="_blank" rel="noreferrer noopener">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                      <FontAwesomeIcon className="dark" size="lg" icon={faGithub} />
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
        </Container>
      </Fade>
    </div>
  )
}

export default About
