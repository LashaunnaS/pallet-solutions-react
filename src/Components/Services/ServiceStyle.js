import styled from 'styled-components';

export const Service = styled.section `
    background-color: #3e4249;
    width: 100vw;
    height: 140vh;
    display: grid;
    grid-template-areas: ". . img . ."
                       ". title title title ."
                       ". desc desc desc ."
                       ". service1 service2 service3 .";
    grid-template-columns: 12% 23% 1fr 23% 12%;
    grid-template-rows: 40% 12% 12% 36%;

    @media(max-width: 1047px){
        height: 140vh;
        grid-template-columns: 8% 27% 1fr 27% 8%;
        grid-template-rows: 30% 10% 17% 43%;
         }

    @media(max-width: 748px){
        grid-template-areas: ". img ."
                            ". title ."
                            ". desc ."
                            ". service1 ."
                            ". service2 ."
                            ". service3 .";
    grid-template-columns: 10% 1fr 10%;
    grid-template-rows: 1fr 5% 1fr 1fr 1fr 1fr;
    height: 200vh;
    }
`;

export const MainImg = styled.div `
    grid-area: img;
    display: flex;
    justify-content: center;
    align-self: flex-end;
`;

export const Img = styled.img `
    height: 256px;
    width: 256px;

    @media(max-width: 748px){
        height: 190px;
        width: 190px;
    }
`;

export const HeadLine = styled.h2 `
    grid-area: title;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 42px;

     @media(max-width: 748px){ font-size: 2em}
`;

export const SubHead = styled.p `
    grid-area: desc;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    color: #fff;
    font-size: 20px;
    @media(max-width: 748px){font-size: 18px;}
`;

export const Serv1 = styled.div`
    grid-area: service1;
    margin: 3em 1em;
`;

export const Serv2 = styled.div`
    grid-area: service2;
    margin: 3em 1em;
`;

export const Serv3 = styled.div`
    grid-area: service3;
    margin: 3em 1em;
`;

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    font-size: 26px; 
`;

export const IInner = styled.i`
    color: #d65050;
    font-size: 26px; 
    border: 1px solid #d65050;
    border-radius: 13em;
    width: 1em;
    padding: 1em;
    text-align: center;
`;

export const STitle = styled.h3`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin: 7px 0 10px;
`;

export const SDesc = styled.p`
    text-align: center;
    color: #fff;
`;