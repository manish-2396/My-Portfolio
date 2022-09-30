import React from 'react'
import GitHubCalendar from "react-github-calendar";
import Container from 'react-bootstrap/esm/Container'

const Github = () => {
    return (
        <div style={{ margin: "auto", color: "white" , paddingTop:"10rem" }}>
            <Container>
                <h2 className="lead" align="center"><b>- GitHub Calendar -</b></h2>
                <br/>
                <br/>
                <GitHubCalendar username="manish-2396" />
            </Container>
        </div>
    )
}

export default Github