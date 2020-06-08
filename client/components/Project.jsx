/**
 * @module  Project
 * @author Jonathan
 * @date  Sun, Jun 7, 2020
 * @description presentation component that renders each project
*/

import React from 'react';

function Project (props) {
  // if project is owned by the user display the project differently
  let projectStyling = props.projectInformation.projectOwn ? { border: 'thin solid red' } : { border: 'thin solid black' };
  // render the project name
  return(
    <div className="individualProject" style={projectStyling}>
      <p> {props.projectInformation.projectName} </p>
    </div>
  );
}

export default Project;