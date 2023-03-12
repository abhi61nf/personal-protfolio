import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/About.css";

const About = () => {
  return (
     <div className="body">  
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2017-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Apeejay School pitampura , New Delhi
          </h3>
          <p>Higher Secondary (PCMB)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bhagwan Parshuram Institute of technology
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="06/2022-present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Placement Coordinator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">BPIT</h4>
          <p>Skills : Networking , Communication</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="07/2022-present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Facilitator Web Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Google Developer Student Club BPIT
          </h4>
          <p>
            Organise various events related to web development and conduct
            various sessions for students to guide them about web development
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11/2022-present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mentor Web Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Newton School Coding Club BPIT
          </h4>
          <p>
            Mentored students in the field of full stack web development ,
            guided them about Mern Stack web development and helped students
            with their projects in react js
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;

 
