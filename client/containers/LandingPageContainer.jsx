/**
 * @module  LandingPageContainer
 * @author  Jonathan
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders a Landing Page component
 */

import React, { Component } from 'react';
import LandingPage from '../components/LandingPage.jsx';
import Header from '../components/Header.jsx';

const mapStateToProps = state => ({
  // provide state key/value pairs for landing page container components
});

const mapDispatchToProps = dispatch => ({
  // link in functions from actions.js
});

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // array of projects specific to the user id
      userProjects: [
        { projectName: 'foobar', projectOwn: true },
        { projectName: 'foobar', projectOwn: true },
        { projectName: 'foobar', projectOwn: true },
        { projectName: 'foobar', projectOwn: false },
        { projectName: 'foobar', projectOwn: false },
        { projectName: 'foobar', projectOwn: false },
      ],
    };
  }

  createNewProject = () => {
    // send a response to the database
    // pop up a form for the use to fill out with the repo link
    console.log('create new project function has been invoked');
  };

  render() {
    return (
      <div>
        <LandingPage
          projectsArray={this.state.userProjects}
          createNewProject={this.createNewProject}
        />
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);
export default LandingPageContainer;

