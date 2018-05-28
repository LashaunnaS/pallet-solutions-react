import styled from 'styled-components';
// import woodStack from './img/woodstack.jpg';

export const About = styled.section `
  background: rgb(243, 243, 241);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
export const WoodStack = styled.div `
grid-column: 3/11;
grid-row: 2/5;
display: flex;
justify-content: center;
align-content: center;
`
export const Img = styled.img `
  height: 80%;
  width: 100%;
`
export const HeadLine = styled.h2 `
  grid-column: 5/9 ;
  grid-row: 4;
  display: flex;
  align-self: center;
  justify-self: center;
  color: rgb(68, 63, 63);
  font-size: 42px;
  padding-top: 2em;
`

export const Description = styled.div `
grid-column: 2/12;
grid-row: 5/6;
display: flex;
align-self: flex-end;
text-align: center;
color: #252525;
`