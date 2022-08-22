import styled from "styled-components";

export const Title = styled.h3`
    font: normal normal bold 24px/28px Rubik;
    color: #72EFDB;
    margin-left: 155px;
    margin-top: 20px
`

export const Container = styled.div`
    display: flex;
    justify-content: center; 
`

export const Table = styled.div`
    width: 75vw;
    height: 440px;
    margin: 20px;
    background: #18326B;
    border-radius: 14px;
    
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

