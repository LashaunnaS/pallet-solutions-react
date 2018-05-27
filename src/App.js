import React, { Component } from 'react';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage'

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <AboutPage />
      </div>
    );
  }
}

export default App;
