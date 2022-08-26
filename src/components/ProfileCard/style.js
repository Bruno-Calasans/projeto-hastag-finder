import styled from 'styled-components'


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    width: 80%;
    height: 300px;
    padding: 35px;
    margin: 10px;
    
    border-radius: 4px;
    border: 1px solid #FFFFFF24;

    background-color: #0B1A49;
    box-shadow: 0px 5px 10px black;
    overflow: hidden;

    figure {
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        align-items: center;

        .avatar {
            width: 100px;
            border-radius: 50%;
            background-color: lightslategray;
        }

        .name {
            flex-grow: 1;
            font-weight: bold;
            font-size:1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;

            margin-top: 5px;
            color: #72EFDB;

        }

    }

    .desc {
        font-size:1.2rem;
    }

    .social-medias {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg {
        color: #72EFDB;
        cursor: pointer;

        &:hover {
            color: black;
        }
    }
`

