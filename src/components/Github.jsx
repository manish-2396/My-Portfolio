import React from 'react'
import GitHubCalendar from "react-github-calendar";
import Container from 'react-bootstrap/esm/Container'

const Github = ({ darkMode }) => {
    return (
        <div style={{ paddingTop: "10rem" }} className="lead">
            <Container align="center">
                <h2 className="lead" align="center"><b>- GitHub Calendar -</b></h2>
                
                <GitHubCalendar username="manish-2396" />

               
                


                <a href="https://github.com/manishchouh2396/github-readme-stats" >
                    <img alt="Manish's Top Languages" style={{width:"50%"}}  src="https://github-readme-stats.vercel.app/api?username=manish-2396&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117" />
                </a>
              



                <a href="https://github.com/manishchouhan2396/github-readme-stats">
                    <img alt="Manish's Top Languages" style={{width:"50%"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=manish-2396&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117" />
                </a>

                <br/>
                


                <p >
                    <a href="https://github.com/manish-2396/github-readme-streak-stats">
                        <img title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="Manish Singh's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=manish-2396&theme=black-ice&hide_border=true&stroke=0000&background=060A0CD0" />
                    </a>
                </p>
            </Container>
        </div>
    )
}

export default Github