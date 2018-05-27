import styled from 'styled-components';
import woodStack from './img/woodstack.jpg';

export const About = styled.section `
  background: rgb(243, 243, 241);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 11vw 5vw 1fr 1fr 5vw 11vw;
  grid-template-rows: 20vh auto 25vh 25vh;
`
export const WoodStack = styled.div `
background-image: url(${woodStack});
background-repeat: no-repeat;
grid-column: 2/6;
grid-row: 2/4;
display: flex;
justify-content: center;
align-content: center;
`
// export const HeadLine = styled.h2`
//   grid-column: 3;
//   grid-row: 2;
//   display: flex;
//   align-self: flex-end;
//   justify-self: center;
//   color: rgb(68, 63, 63);
//   font-size: 42px;
//   margin: 0px;
// `

// export const Paragraph = styled.p`
// grid-column: 2/5;
// grid-row: 3;
// display: flex;
// align-self: center;
// justify-self: center;
// text-align: center;
// `