import React from 'react';
import Navbar from './Navbar';
import Videos from './Videos';
import App from './App';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Codes from './Codes';
import Drawings from './Drawings';

class MenuContainer extends React.Component {
  render() {
    return <div id="navigation">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<App />}/>
          <Route path='/videos' element={<Videos />}/>
          <Route path='/codes' element={<Codes />}/>
          <Route path='/drawings' element={<Drawings />}/>
        </Routes>
        <Footer />
    </div>
  }
}

export default MenuContainer;