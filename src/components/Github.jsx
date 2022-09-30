import React from 'react'
import GitHubCalendar from "react-github-calendar";
import Container from 'react-bootstrap/esm/Container'

const Github = ({ darkMode }) => {
    return (
        <div style={{ paddingTop:"10rem" }} className="lead">
            <Container>
                <h2 className="lead" align="center"><b>- GitHub Calendar -</b></h2>
                <br/>
                <br/>
                <GitHubCalendar  username="manish-2396" />
            </Container>
        </div>
    )
}

export default Github