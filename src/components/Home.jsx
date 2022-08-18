import React from 'react'
// import { AttentionSeeker } from 'react-awesome-reveal';
// import helloLight from '../media/SushantPortfolio.png';
// import helloDark from '../media/hello-dark.png';
import profile from "../media/manish.png"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Home = ({ darkMode }) => {
    return (
        <div>
            <Container align="center" >
                <Row>
                    <Col>
                        <div style={{ margin: "5rem" }} >
                            <img src={profile} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "13rem" }} >
                            <h1 className="display-3 hello" align="center"><code> I'm Manish Singh Chouhan</code></h1>
                            <h2 className="lead" align="center">I am a MERN Stack Web Developer </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
        </div>
    )
}

export default Home
