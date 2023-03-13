import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="hello" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <h2> Check them on github and web </h2>
      <div style={{ display: 'flex', gap: 8 }}> 
      <a href={project.githubUrl}>
      <IconButton>
        <GitHubIcon />
      </IconButton>
    </a>
    <a href={project.liveUrl}>
      <IconButton>
        <LanguageIcon/>
      </IconButton>
    </a>
    </div>
    </div>
  );
}

export default ProjectDisplay;