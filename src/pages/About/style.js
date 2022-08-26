
import styled from 'styled-components'

export const AboutSection = styled.section`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    padding: 17.5vh 7vw;
    overflow: hidden;

    div {
        align-self: flex-start;

        h1 {
            font-size: 5rem;
            font-weight: bold;
            margin-bottom: 40px;
        }

        p { 
            color: #FCFCFC;
            text-align: start; 
            line-height: 2rem;
            font-size: 1.3rem/1.8rem;

            max-width: 39vw;
            min-width: 290px;

            @media (max-width: 840px){
                width: 100%;
                max-width: 100%;
            }
        }
    }
   
    img {
        margin: 62px 0;
        width: 33vw;
        max-width: 637px;
        min-width: 290px;
    }


    @media (max-width: 840px) {

        padding: 17.5vh 5vw;
        > div {
            > h1 {
                font-size: 3rem;
            }
        }

        img {
            margin: 32px auto;
            flex-direction: column;
            width: 60%;
        }
    }

`

export const TeamSection = styled.section`

    display: flex;
    flex-direction: column;
    
    padding: 0 7vw 10vh;
    height: 100%;
    

    overflow: hidden;

    h1 {
        padding-left: 18px;
        font-size: 3.4rem;
        font-weight: bold;
        margin-bottom: 10vh;
    }
    
    .profilesContainer {

        display: flex;
        width: 100%;

        @media (max-width: 840px) and (min-width: 630px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr ;

            div {
                justify-self: center;
            }
        }
        

        @media (max-width: 629px) {
            align-items: center;
            flex-direction: column;

            div {
                width: 300px;
            }
        }
    }
`

