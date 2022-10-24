import React from 'react'
import profile from "../media/manish.png"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Home = ({ darkMode }) => {
    return (
        <div style={{paddingTop:"1.5rem"}}>
            <Container align="center" >
                <Row>
                    <Col>
                        <div style={{ margin: "auto"}} >
                            <img style={{ width:"25rem" }} src={profile} alt="Manish'pic" />
                        </div>
                    </Col>
                    <Col>
                        <div style={{ margin: "auto" , paddingTop:"40%"}} >
                            <h1 className="display-3 hello" align="center"><code> I'm Manish Singh Chouhan</code></h1>
                            <h2 className="lead" align="center">I am a Full Stack Web Developer </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
        </div>
    )
}

export default Home
