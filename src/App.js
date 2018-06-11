import React, { Component } from 'react';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import ServicePage from './Components/Services/ServicesPage';
import ContactPage from './Components/Contact/ContactPage';
import { Main } from "./AppStyle";

class App extends Component {
  render() {
    return (
      <Main>
        <HomePage />
        <AboutPage />
        <ServicePage />
        <ContactPage />
      </Main>
    );
  }
}

export default App;
