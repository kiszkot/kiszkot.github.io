import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import MenuContainer from './MenuContainer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <BrowserRouter>
    <MenuContainer />
    </BrowserRouter>
  </div>
)

/*
ReactDOM.render(
  <MenuContainer />,
  document.querySelector("#left")
)

ReactDOM.render(
  <Navbar />,
  document.querySelector("#navBar")
)*/

/*
ReactDOM.render(
  <LinkList links={codeLinks}/>,
  document.querySelector("#codeLink")
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();