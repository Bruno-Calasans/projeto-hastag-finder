import styled from "styled-components";

export const Title = styled.h3`
    font: normal normal bold 24px/28px Rubik;
    color: #72EFDB;
    text-align: center;
    margin: 18vh 35px 35px;

    @media(min-width: 769px){
       text-align: left;
       padding-left 55px;
    }

    @media(min-width: 770px){
        text-align: left;
        padding-left: 170px;
    }

    
`

export const Table = styled.div`
    width: 100%;
    margin: 0 auto;
    background: #18326B;
    border-radius: 14px;

    @media(min-width: 640px){
        width: 75vw;
    }
    
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    height: 50px;
    width: 100%;
    background: rgba( 10, 23, 68, 0.6 );
    padding: 18px;
    margin-reight: 10px;
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
    gap: 50px;
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