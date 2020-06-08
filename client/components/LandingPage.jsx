/**
 * @module  LandingPage
 * @author Louis
 * @date  Sun, Jun 7, 2020
 * @description presentation component that renders all user projects with create project functionality
*/

import React from 'react';

import Project from './Project.jsx';


function LandingPage(props) {
  // store the rendered projects
  const renderedProjects = [];
  // loop through array passed in props && pass the object to Project.jsx
  for (let i = 0; i < props.projectsArray.length; i++) {
    let project = props.projectsArray[i];
    renderedProjects.push(
      <Project
        key={i} projectInformation={project}
      />
    );
  }
  
  // render the create new project button && all tasks in array passed from props
  return (
    <div className="landingContainer">
      <div className="createProject">
        +
      </div>
      {renderedProjects}
    </div>
  )
}

export default LandingPage;
