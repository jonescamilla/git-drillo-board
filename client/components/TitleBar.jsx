/**
 * @module  TitleBar
 * @author  Jonathan 
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders User's project name and a return button
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="projectTitleBar">
    <h3> {props.projectName} </h3>
    <Link to="/dashboard">Back to Dashboard</Link>
  </div>
);

export default Header;