import styled from 'styled-components';


export const About = styled.section`
  background: rgb(243, 243, 241);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: ". . ."
                       ". img ."
                       "title title title"
                       ". desc .";
  grid-template-columns: 17% 1fr 17%;
  grid-template-rows: 15% 50% 10% 25%;

 @media(max-width: 989px) {
  height: 80vh;
 }
  @media(max-width: 981px) {
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: 10% 50% 15% 25% ;
}
@media(max-width: 666px) {
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: 10% 40% 15% 25% ;
}

@media(max-width: 455px) {
  grid-template-rows: 10% 20% 15% 45% ;
}
`;

export const WoodStack = styled.div`
  grid-area: img;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const HeadLine = styled.h2`
   grid-area: title;
   display: flex;
   justify-content: center;
   color: rgb(68, 63, 63);
   font-size: 42px;

   @media(max-width: 981px) {
  padding-top: 0;
}
`;

export const Description = styled.div`
  grid-area: desc;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #252525;
`;