import styled from 'styled-components'

export const CardWrapper = styled.div`
  background-color: #1E3E7B17;
  border: 1px solid #1E3E7B;
  border-radius: 8px;

  padding: 42px;

  margin-bottom: 32px; 

  display: flex;
  justify-content: flex-start;

  gap: 28px;

  -webkit-box-shadow: 0px 0px 68px -24px rgba(4,1,41,1);
  -moz-box-shadow: 0px 0px 68px -24px rgba(4,1,41,1);
  box-shadow: 0px 0px 68px -24px rgba(4,1,41,1);
  
  @media (max-width: 460px){
    padding:16px;
    font-size: 2.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const InfoWrapper = styled.div`
`

export const Avatar = styled.img`
  border-radius: 50%;

  width: 82px;
  height: 82px;
`

export const Username = styled.h3`
  font-size: 2rem;
  margin-bottom: 8px;
  > span {
    margin-left: 8px;
    font-size: 1.25rem;
    color:#8D9DA2;
  }

`
export const Description = styled.p`
  font-size: 1.25rem;
  color: #D9D9D9;
  margin-bottom: 16px;
  width: 80%;
  @media (max-width: 460px){
    width: 100%;
  }
`
export const LinkButton = styled.a`
  color: #72EFDB;
  font-size: 1.30rem;
  margin-bottom: 8px;
`