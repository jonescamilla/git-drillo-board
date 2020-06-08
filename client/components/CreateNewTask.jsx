/**
 * @module  CreateNewTask
 * @author  Jonathan
 * @date  Sun, Jun 7, 2020
 * @description presentation component that renders a popup form for new task input
*/

import React from 'react';

const CreateNewTask = (props) => (
  <div className='popup'>
    <div className='popup_inner'>
      <h3>New Task...</h3>
      <form>
        <label>
          Task:
          <input type="text" name="name" />
        </label>
        <label>
          Assigned:
          {/* <input type="text" name="name" /> */}
        <select>
          <option value="82sdf68">Ronelle</option>
          <option value="fd687dsf">Katty</option>
          <option selected value="567dsfd">Louis</option>
          <option value="s58sdfs">Jonathan</option>
        </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={props.closePopup}>x</button>
    </div>
  </div>
)

export default CreateNewTask;