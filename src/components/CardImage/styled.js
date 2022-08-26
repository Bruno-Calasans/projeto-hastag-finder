import styled from 'styled-components'

export const ImageWrapper = styled.div`
  background-image: url(${props => props.imgUrl}); 
  background-repeat: no-repeat;
  background-size: cover;
  height: 287px;
  width: 287px;

  border-radius:32px;
  padding: 20px;

  display: flex;
  align-items: flex-end;

  -webkit-box-shadow: 0px 0px 68px -24px rgba(4,1,41,1), inset 0px -73px 75px -35px rgba(3,8,10,1);;
  -moz-box-shadow: 0px 0px 68px -24px rgba(4,1,41,1), inset 0px -73px 75px -35px rgba(3,8,10,1);
  box-shadow: 0px 0px 68px -24px rgba(4,1,41,1), inset 0px -73px 75px -35px rgba(3,8,10,1);

 
  >p {
    font-size: 1rem;
    
    >span {
      margin-top: 2px;
      display: block;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1770px){
    height: 240px;
    width: 240px;
  }
  @media (max-width: 1480px){
    height: 200px;
    width: 200px;
  }
  @media (max-width: 1272px){
    height: 176px;
    width: 176px;
  }

  @media (max-width: 1140px){
    height: 287px;
    width: 287px;
  }
  @media (max-width: 720px){
    height: 220px;
    width: 220px;
  }
  @media (max-width: 628px){
    height: 160px;
    width: 160px;
  }
  @media (max-width: 420px){
    height: 260px;
    width: 260px;
  }
  
`