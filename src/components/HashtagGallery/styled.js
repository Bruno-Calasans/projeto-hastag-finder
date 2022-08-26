import styled from 'styled-components'

export const SearchMessage = styled.p`
  font-size: 2rem;
  width: fit-content;
  margin: 0 auto 10vh;
  letter-spacing: 2px;
  word-spacing: 2px;

  @media (max-width: 1140px){
    display: none;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 0 7vw;

  margin-bottom: 10vh;
  @media (max-width: 1140px){
    padding: 0 5vw;
  }
`

export const ColumnCardUser = styled.div`
  width: 46vw;
  @media (max-width:1140px){
    width: 100%;
    &.disabled {
      display: none;
    }
  } 
`

export const ColumnCardImage = styled.div`

  @media (max-width:1140px){
    width: 100%;
    justify-content: center;
    &.disabled {
      display: none;
    }
  } 

  width: 35vw;
  height: fit-content;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 45px;

  align-items: flex-start;
  justify-content: space-between;

  flex-shrink: 1;
`

export const SwitchWrapper = styled.div`
  display: none;
  font-size: 3.5rem;
  width: 100%;
  padding: 0 7vw;
  margin-bottom: 10vh;
  @media (max-width: 1140px){
    display: flex;
  }

  @media (max-width: 880px){
    padding: 0 5vw;
    font-size: 3rem;
  }
  @media (max-width: 460px){
    padding: 0 5vw;
    font-size: 2.5rem;
  }

`
export const SwitchButton = styled.button`
  border-bottom: 6px solid #41558E;
  padding: 16px 0;
  width: 50%;
  text-align: center;

  transition: .4s;
  &.selected {
    color: #72EFDB; 
    border-color: #72EFDB;
  }
  
`