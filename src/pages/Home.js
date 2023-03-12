import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import IconButton from '@material-ui/core/IconButton';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Abhinav</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/abhinav-goel-297901203/">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="mailto:csabhi108@gmail.com">
            <IconButton>
              <EmailIcon />
            </IconButton>
          </a>
          <a href="https://github.com/abhi61nf">
            <IconButton>
              <GithubIcon/>
            </IconButton>
          </a>
          <div>
            <a href="https://drive.google.com/file/d/1HfArQBwHQioFq_PrepKTuP_FxLBKCPpz/view?usp=share_link">
              <button className="button">Download CV </button>
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, BootStrap, MaterialUI, NPM, React js</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, REST api, MongoDB, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C++,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
