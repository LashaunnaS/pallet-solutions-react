import React, { Component } from "react";
import { Home, MainTitle, Hr, Slogan, Button } from "./HomeStyles";

function HomePage() {
  return (
    <Home>
      <MainTitle>Pallet Solutions</MainTitle>
      <Hr></Hr>
      <Slogan>Our success is based on the commitments we make and fulfill to our customers...</Slogan>
      <Button>Get in touch »</Button>
    </Home>
  );
}

export default HomePage;
