import styled from 'styled-components'


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid black;


    background-color: gray;

    figure {
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        align-items: center;

        img {
           
            width: 50%;
            border-radius: 50%;
            background-color: lightblue;
        }

        figcaption {
            flex-grow: 1;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    p {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

