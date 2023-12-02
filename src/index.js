import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/index.css';
import MenuContainer from './components/MenuContainer';
import reportWebVitals from './components/reportWebVitals';
// import PiwikPro from '@piwikpro/react-piwik-pro';

// PiwikPro.initialize('5484f57a-1b43-4fde-bbe7-d152de83ddbe', 'https://kiszkot.piwiksandbox.com');
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <BrowserRouter>
    <MenuContainer />
    </BrowserRouter>
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
