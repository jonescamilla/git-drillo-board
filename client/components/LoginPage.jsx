/**
 * @module  LoginPage
 * @author Louis Xavier Sheid III
 * @date  Sun, Jun 7, 2020
 * @description github login page initialize oAuth
*/

import React from 'react';

// render page with clickable github logo image
const LoginPage = props => (
  <div id="LoginPage">
    <div id="imgWrap">
      <a href="/auth/github">
        <img src='../assets/githublogo.png' className="gitLogo"></img>
      </a>
    </div>
  </div>
);

export default LoginPage;
