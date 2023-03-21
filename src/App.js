import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Home,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
  Github,
} from "./components";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import "./components/styles.css";
import "./components/button.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <Router>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Route path="/">
          <Navbar
            expand="lg"
            className="navbar"
            data-theme={darkMode ? "dark" : "light"}
          >
            <img
              style={{ width: "5%", height: "2%", marginLeft: "1%" }}
              src="https://user-images.githubusercontent.com/100896129/203707776-8e884239-64fe-4ac5-9f28-121ecdec6dd0.png"
              alt="logo"
            />
            <Navbar.Brand href="#home" className="navname">
              Welcome
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about" className="link">
                  About
                </Nav.Link>
                <Nav.Link href="#skills" className="link">
                  Skills
                </Nav.Link>
                <Nav.Link href="#projects" className="link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#github" className="link">
                  Github
                </Nav.Link>
                <Nav.Link href="#contact" className="link">
                  Contact
                </Nav.Link>
              </Nav>
              <Button
                className="mode-button"
                onClick={toggleDarkMode}
                variant={darkMode ? "outline-light" : "outline-dark"}
              >
                <FontAwesomeIcon
                  className="dark"
                  size="lg"
                  icon={faAdjust}
                  spin
                />
              </Button>
            </Navbar.Collapse>
          </Navbar>
          <div id="home">
            <Home darkMode={darkMode} />
          </div>
          <div id="about">
            <About darkMode={darkMode} />
          </div>
          <div id="skills">
            <Skills darkMode={darkMode} />
          </div>
          <div id="projects">
            <Projects darkMode={darkMode} />
          </div>
          <div id="github">
            <Github darkMode={darkMode} />
          </div>
          <div id="contact">
            <Contact darkMode={darkMode} />
          </div>
          <Footer darkMode={darkMode}  />
        </Route>
        <br></br>
      </div>
    </Router>
  );
}

export default App;
