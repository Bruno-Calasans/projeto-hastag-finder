import styled from 'styled-components'


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    width: 80%;
    height: 350px;
    padding: 20px;
    margin: 10px;
    
    border-radius: 4px;
    border: 1px solid #FFFFFF24;

    background-color: #0B1A49;
    box-shadow: 0px 5px 10px black;
    overflow: hidden;

`

export const Profile = styled.figure`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: lightslategray;
`

export const Name = styled.figcaption`
    flex-grow: 1;
    font-weight: bold;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;
    color: #72EFDB;
`

export const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    height: 40%;
`

export const SocialMidiaContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SocialMidia = styled.a`

    color: #72EFDB;
    cursor: pointer;

    svg {
        width: 28px;
        height: 28px;
        margin: 0px 4px;
    }

    &:hover {
        path {fill: black;}
    }
`

