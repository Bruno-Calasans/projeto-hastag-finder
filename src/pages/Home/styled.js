import styled from 'styled-components'

export const Bg = styled.div`
  background-image: url('/images/hero-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: inherit;

  padding: 0 7vw 17.5vh 7vw;
  width: 100%;

  @media (max-width: 450px){
    background-image: url('/images/mobile-hero-bg.jpg');
    padding: 0 5vw 300px 5vw;
  }
`

export const TitleWrapper = styled.div`
  padding-top: 25vh;
  width: 47%;
  min-width: 480px;
  margin-bottom: 17.5vh;
  > h1 {
    font-weight: bold;
    font-size: 5rem;
  }
  > p {
    font-size: 2rem;
    color: #F9F9F9;
    padding-top: 28px;
    width: 32vw;
    min-width: 400px;
  }

  @media (max-width: 1000px){
    margin-bottom: 72px;
    > p {
    padding-top: 14px;
  }
  }

  @media (max-width: 660px){
    padding-top: 135px;
  }

  @media (max-width: 560px){
    width: 100%;
    min-width: 300px;
    > h1 {
    font-size: 4rem;
    }
    > p {
    font-size: 1.8rem;
    min-width: 280px;
  }
  }
`

export const InputWrapper = styled.div`
  width: 52vw;
  height: 11vh;
  border-radius: 10em;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4%;

  padding: 0 4%;
  background-color: #1E3E7B;
  margin: 0 auto;

  >img {
    height:30%;
  }

  >input {
    color: #8D9DA2;
    outline: none;
    font-size:3rem;
    font-weight: normal;

    width: 100%;
  }

  @media (max-width: 1080px){
   width: 100%;
   height: 51px;
   min-width: 280px;
  }
`
