import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
// Steps to commit a change
//  1- git add .
//  2- git commit -m 'shit'
//  3- git push //git push --set-upstream origin brainch (if first time of the branch)
//  4 - create a pull request  (master left - new right)
//  5- Finish that shtttttt
reportWebVitals();
