import React from "react";
import Links from "./Links";

function About(props) {
  // Check if bio prop is provided and not an empty string
  if (props.bio && props.bio.trim() !== "") {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      </div>
    );
  } else {
    // If bio prop is not provided or is an empty string, don't display the <p> tag
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        
        <Links github={props.github} linkedin={props.linkedin} />
      </div>
    );
  }
}

export default About;


