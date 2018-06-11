import styled from 'styled-components';


export const About = styled.section `
  background: rgb(243, 243, 241);
  width: 100vw;
  height: 130vh;
  display: grid;
  grid-template-areas: ". img ."
                       "title title title"
                       ". desc .";
  grid-template-columns: 17% 1fr 17%;
  grid-template-rows:  55% 15% 60%;

  @media(max-width: 981px) {
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: 50% 15% 35% ;
  height: 110vh;
}

@media(max-width: 666px) {
  height: 110vh;
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: 50% 10% 40% ;
}

 @media(max-width: 455px) {
  height: 110vh;
  grid-template-rows: 40% 15% 45% ;
} 

@media(max-width: 375px) {
  height: 120vh;
  grid-template-rows: 40% 12% 58% ;
} 

@media(max-width: 320px) {
  grid-template-rows: 40% 10% 59% ;
} 
`;

export const MainImg = styled.div `
  grid-area: img;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 6em;
`;

export const Img = styled.img `
  height: 100%;
  width: 100%;
}
  @media(max-width: 320px) {
  height: 80%;
  width: 100%;
} 
`;

export const HeadLine = styled.h2 `
   grid-area: title;
   display: flex;
   justify-content: center;
   color: rgb(68, 63, 63);
   font-size: 42px;

  @media(max-width: 981px) {
    padding-top: 0;
  }

  @media(max-width: 320px) {
  padding: 0px;
} 
  
`;

export const Description = styled.div `
  grid-area: desc;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #252525;
  font-size: 20px;

  @media(max-width: 455px) {font-size:18px;}
`;