import styled from "styled-components";
import myImage from "./img/hero.jpg";

export const Home = styled.main `
  background-image: url(${myImage});
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 34% 33% 32%;
  grid-template-rows: 25% 20% 20% auto;
`;

export const MainTitle = styled.h2 `
  grid-column: 1/4;
  grid-row: 2;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  font-family: sans-serif;
  text-align: center;
  font-size: 57px;
  padding: 0 5%;
  color: #fff;
  line-height: 67px;
  font-weight: 700;
  margin: 0px;
`;

export const Hr = styled.hr `
  grid-column: 2;
  grid-row: 3;
  display: flex;
  align-self: flex-start;
  width: 40%;
  height: 2px;
  background: #d65050;
  border: none;
`

export const Slogan = styled.p `
  grid-column: 1/4;
  grid-row: 3;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  padding: 0 5%;
  color: #fff;
  font-size: 30px;
  line-height: 40px;
  padding: 20px 0 50px;
  font-weight: 300;
  text-align: center;
`
export const Button = styled.button `
  grid-column: 2;
  grid-row: 4;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  justify-self: center;
  width: 40%;
  border-radius: 3px;
  background: #dd5638;
  border: 2px solid #dd5638;
  font-family: "Raleway", sans-serif;
  font-size: 13px;
  line-height: 24px;
  font-weight: 700;
  padding: 12px 0px;
  color: #fff;
  text-transform: uppercase;
  transform: scale(1);
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    transition: 0.5s;
    background: #fff;
    border: #fff;
    color: #dd5638;
  }


@media (max-width: 816px) {
  width: 50%;
}

@media (max-width: 686px) {
  width: 60%;
}

@media (max-width: 556px) {
  margin-top: 5em;
  width: 70%;
}

@media (max-width: 556px) {
  margin-top: 5em;
  width: 100%;
}
`