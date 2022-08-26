import styled from 'styled-components'

export const Header = styled.header`
  height: 10vh;
  min-height: 85px;
  width: 100%;

  padding: 0 5vw; 
  position: fixed;
  top: 0;
  left: 0;

  background: rgba( 10, 23, 68, 0.6 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 460px){
    gap: 16px;
  }
`

export const Logo = styled.div`
  letter-spacing: .2px;
  font-size: 2.25rem;
  > span {
    letter-spacing: 0px;
    font-weight: bold;
  }

  @media (max-width: 460px){
    font-size: 1.8rem;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 40%;
  min-height: 30px;
  width: 20%;

  max-width:375px;
  min-width:242px;

  @media (max-width: 460px){
    width: 50%;
    min-width:140px;
    gap: 6px;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;

  background-color: #1E3E7B;

  width: 100%;
  height: 18vh;
`

export const Main = styled.main`
  min-height: 82vh;
`

