import React, { Component } from 'react';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import ServicePage from './Components/Services/ServicesPage';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <AboutPage />
        <ServicePage />
      </div>
    );
  }
}

export default App;
