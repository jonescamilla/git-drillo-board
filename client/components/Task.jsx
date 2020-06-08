/**
 * @module  Task
 * @author  Jonathan
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders a single box for each task
 */

import React from 'react';

function Task (props) {
  let taskStyling = props.taskInformation.pending ? { border: 'thin solid red' } : { };

  return(
    <div className="individualTask" style={taskStyling}>
      <p> Task: {props.taskInformation.task} </p>
      <p> AssignedDev: {props.taskInformation.assignedDev} </p>
      <p> Commit: {props.taskInformation.commitMessage} </p>
      <p> CommitUrl: {props.taskInformation.commitUrl} </p>
      <button onClick={props.taskButtonEdit}> edit </button>
    </div>
  );
}

export default Task;
