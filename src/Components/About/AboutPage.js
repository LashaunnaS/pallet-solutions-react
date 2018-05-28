import React from "react";
import {
  About,
  WoodStack,
  HeadLine,
  Description,
  Img
} from "./AboutStyles";

import img from './img/woodstack.jpg'

function AboutPage() {
  return ( <
    About >
    <
    WoodStack >
    <
    Img src = {
      img
    }
    /> <
    /WoodStack> <
    HeadLine > Who We Are < /HeadLine> <
    Description >
    <
    p > We are your single source recycler offering solutions that are simple and convenient to implement.We understand the growing needs of our industry and the ever changing regulatory environment.Our service is reliable because we value our strong and secure partnerships, and have a professional and motivated team.Our business is growing as a result of our ever growing customer community and we strive to service our customers better. < /p>   <
    /Description>

    <
    /About>
  );
}

export default AboutPage;