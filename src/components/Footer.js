import React from "react";
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/abhinav-goel-297901203/">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="mailto:csabhi108@gmail.com">
            <IconButton>
              <MailIcon />
            </IconButton>
          </a>
          <a href="https://github.com/abhi61nf">
            <IconButton>
              <GitHubIcon/>
            </IconButton>
          </a>
      </div>
      <p> Made with ❤️ by Abhinav </p>
    </div>
  );
}

export default Footer;