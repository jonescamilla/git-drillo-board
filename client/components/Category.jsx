/**
 * @module  Category
 * @author  Jonathan
 * @date  Sun, Jun 7, 2020
 * @description presentation component that renders n Task components with create task functionality
*/

import React from 'react';
import Task from './Task.jsx';
import CreateNewTask from './CreateNewTask.jsx'


function Category(props) {
  // store the rendered tasks
  const renderedTasksArray = [];
  // loop through array passed in props && pass the object to Task.jsx
  for (let i = 0; i < props.array.length; i++) {
    let task = props.array[i];
    renderedTasksArray.push(<Task key={i} taskInformation={task} taskButtonEdit={props.taskButtonEdit}/>);
  }
  // render the create new task button && all tasks in array passed from props
  return (
    <div className="categories">
      <h4>{props.categoryName}</h4>
      {renderedTasksArray}
      <button onClick={props.createNewTask}> + Add another card </button>
      {props.popUpToggle ?
         <CreateNewTask
          closePopup={props.createNewTask} /> : null }
    </div>
  );
}

export default Category;
