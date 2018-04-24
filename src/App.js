import React, { Component } from 'react';

// components

import NavBar from './components/headerComponent/NavBar';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';

// include
import Navbar from './components/headerComponent/Navbar';
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
