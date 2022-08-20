import styled from 'styled-components'

export const Header = styled.header`
  height: 80px;
  width: 100%;

  padding: 0 20px; /* tava dando problema se colocar 64px */
  position: sticky;
  top: 0;
  left: 0;

  background: rgba( 10, 23, 68, 0.6 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
  backdrop-filter: blur( 7.5px );
  -webkit-backdrop-filter: blur( 7.5px );

  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const Logo = styled.div`
  letter-spacing: .2px;
  font-size: 20px;
  > span {
    letter-spacing: 0px;
    font-weight: bold;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Footer = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: #1E3E7B;

  width: 100%;
  height: 80px;

`

