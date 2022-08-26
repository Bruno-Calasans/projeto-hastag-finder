import styled from "styled-components";

export const Title = styled.h3`
    font: normal normal bold 24px/28px Rubik;
    color: #72EFDB;
    text-align: center;
    margin: 18vh 35px 35px;

    @media(min-width: 769px){
       text-align: left;
       padding-left: 170px;
    }
`

export const Table = styled.div`
    width: 75vw;
    margin: 0 auto;
    background: #18326B;
    border-radius: 14px;
    @media(max-width: 768px){
        width: 100%;
    }   
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 90px;
    height: 50px;
    width: 100%;
    background: rgba( 10, 23, 68, 0.6 );
    padding: 20px;
`

export const TitleTable = styled.div`
   width: 100%;
   font: normal normal bold 18px Rubik;
   color: #72EFDB;
`

export const Titles = styled.h3`
    font: normal normal bold 18px Rubik;
    color: #72EFDB;
`

export const Items = styled.div`
    display: flex;
    gap: 90px;
    padding: 18px;
    color: #72EFDB;
    
`
export const FirstParagraph = styled.p`
    display: inline-block;
    width: 100%;
    color: #fff;  
`


export const Divider = styled.div`
    width: 98%;
    margin: auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
    &:last-child {
        display:none;
    }
`