import React from 'react'
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
                            <img style={{ width:"25rem" }} src="https://user-images.githubusercontent.com/100896129/203706303-7b22682b-db8c-424e-aeb3-dbfc11679a3b.png" alt="Manish'pic" />
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
