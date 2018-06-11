import styled from 'styled-components';
import img from './img/contactImg.jpg';

export const Contact = styled.section`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

export const FormContainer = styled.div`
    /* background-color: rgba(0, 0, 0, 0.7); */
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-areas: ". . title . ."
                         ". . desc . ."
                         ". form form form ."
                         ". . map . .";
    grid-template-columns: 12% 20% 2fr 20% 12%;
    grid-template-rows: 1fr 1fr 50%;
`;

export const Title = styled.h2`
    grid-area: title;
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-bottom: 0;
    color: #fff;
    font-size: 42px;
    
`;

export const Description = styled.p`
    grid-area: desc;
    justify-self: center;
    text-align: center;
    color: #fff;
    font-size: 24px;
`;

export const ContactForm = styled.div`
    grid-area: form;
`;