/**
 * @module  BoardPageContainer
 * @author  Jonathan and Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders 3 Category components
*/

import React, { Component } from 'react';
import TitleBar from '../components/TitleBar.jsx';
import Category from '../components/Category.jsx';

const mapStateToProps = state => {
  // provide pertinent state here
};

const mapDispatchToProps = dispatch => {
  // create functions that will dispatch action creators
};

class BoardPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: 'the ultimate foobar project',
      inProgress: [
        {
          task: 'Create login button',
          status: 'inProgress',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: true,
          commit_sha: 'longString',
        },
        {
          task: 'Create login button',
          status: 'done',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: false,
          commit_sha: 'longString',
        },
      ],
      done: [
        {
          task: 'Create login button',
          status: 'done',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: false,
          commit_sha: 'longString',
        },
        {
          task: 'Create login button',
          status: 'done',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: false,
          commit_sha: 'longString',
        },
        {
          task: 'Create login button',
          status: 'done',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: false,
          commit_sha: 'longString',
        },
      ],
    };
  }

  createNewTask = () => {
    // post a new task with a specific status
    console.log('new task created functionality has been invoked');
  };

  taskButtonEdit = () => {
    // edit the task name
    console.log('edit task button functionality has been invoked');
  };

  returnToProjectsBoard = () => {
    // back button
    console.log('return to Projects Page functionality has been invoked');
  };

  deleteTask = () => {
    // delete any tag
    console.log('delete tag functionality has been invoked');
  };

  render() {
    return (
      <div>
        <TitleBar projectName = {this.state.projectName}/>
        <div className="BoardPageContainer">
          <Category
            categoryName="In Progress"
            createNewTask={this.createNewTask}
            taskButtonEdit={this.taskButtonEdit}
            array={this.state.inProgress}
          />
          <Category
            categoryName="Done"
            createNewTask={this.createNewTask}
            taskButtonEdit={this.taskButtonEdit}
            array={this.state.done}
          />
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(BoardPageContainer);

export default BoardPageContainer;
