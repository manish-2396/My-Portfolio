import React from 'react'
import GitHubCalendar from "react-github-calendar";
import Container from 'react-bootstrap/esm/Container'
import { Zoom, Fade } from 'react-awesome-reveal'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Github = ({ darkMode }) => {
    return (
        <div style={{ paddingTop: "6rem" }} className="lead">
            <Container align="center">
                <h2 className="lead" align="center"><b>- GitHub Calendar -</b></h2>
                <Zoom>
                    <Row>
                        <Col lg={6} sm={12} style={{ paddingTop: "1.5rem" }} >
                            <GitHubCalendar username="manish-2396"/>
                            {/* <GitHubCalendar username="manish-2396" /> */}
                        </Col>
                        <Col lg={6} sm={8} style={{ paddingTop: "1.5rem" }} >
                            <a href="https://github.com/manish-2396">
                                <img title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="Manish Singh's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=manish-2396&theme=black-ice&hide_border=true&stroke=0000&background=060A0CD0" />
                            </a>
                        </Col>
                    </Row>
                    <Row  >
                        <Col lg={6} sm={8} style={{ paddingTop: "1.5rem" }} >
                            <a href="https://github.com/manish-2396" >
                                <img alt="Manish's Top Languages" style={{ width: "32rem" }} src="https://github-readme-stats.vercel.app/api?username=manish-2396&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117" />
                            </a>
                        </Col>
                        <Col lg={6} sm={8} style={{ paddingTop: "1.5rem" }} >
                            <a href="https://github.com/manish-2396">
                                <img alt="Manish's Top Languages" style={{ width: "32rem" }} src="https://github-readme-stats.vercel.app/api/top-langs/?username=manish-2396&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117" />
                            </a>
                        </Col>
                    </Row>
                </Zoom>

                {/* <div style={{ display: "flex", paddingTop: "3rem", justifyContent: "space-between" }} >
                    <div>

                    </div>
                    <div>

                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", flexWrap: "wrap" }} >
                    <div>

                    </div>
                    <div>

                    </div>

                </div> */}




            </Container>
        </div>
    )
}

export default Github