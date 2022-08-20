
import styled from 'styled-components'


export const AboutSection = styled.section`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 20px;
    overflow: hidden;
   
    h1 {
        grid-column: span 2;
        align-self: center;
        font-size: 3rem;
    }

    p {
        text-align: justify;
        align-self: center;
    }

    img {
        justify-self: center;
        align-self: center;

        margin: 20px;
        width: 200px;
    }

    @media (min-width: 1200px) {
        width: 1400px; 
        margin: auto;
        
    }

    @media (max-width: 600px) {

        flex-direction: column;

        p {
            grid-column: span 2;
        }

        img {
            grid-column: span 2;
            align-self: center;
        }
   
    }
`

export const TeamSection = styled.section`

    display: flex;
    justify-items: center;
    flex-direction: column;
    overflow: hidden;

    margin: auto;
    width: 90%;
    height: 100%;
    padding: 20px;

    h1 {
        align-self: flex-start;
        font-size: 3rem;
    }

    @media (min-width: 700px) {
        width: 1000px; 
    }

`
export const ProfilesContainer = styled.div`

    display: flex;
    justify-content: center;



    @media (max-width: 750px) and (min-width: 550px) {

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr ;
    
    }

    @media (max-width: 550px) {

        align-items: center;
        flex-direction: column;
    }
`
