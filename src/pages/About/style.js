
import styled from 'styled-components'

export const AboutSection = styled.section`

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 20px;
    overflow: hidden;

    div {
        align-self: flex-start;

        h1 {
            font-size: 3rem;
            padding: 5px;
        }

        p { text-align: justify; }
    }
   
    img {
        width: 40%;
        margin-left: 30px;
    }

    /* Máximo Conteúdo */
    @media (min-width: 1440px) {
        width: 1440px; 
        margin: auto; 
 
    }

    @media (max-width: 840px) {
        flex-direction: column;

        img {
            width: 60%;
            margin: 30px 0px 0px 0px;
        }
    }

`

export const TeamSection = styled.section`

    display: flex;
    flex-direction: column;
    
    height: 100%;
    padding: 20px;

    overflow: hidden;

    h1 {
        font-size: 3rem;
    }

    /* Máximo Conteúdo */
    @media (min-width: 1200px) {
       width: 1200px;
       margin: auto;
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

