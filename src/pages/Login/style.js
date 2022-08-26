import styled from "styled-components";

export const Back = styled.div`
  background: url("../../../public/images/hero-bg.jpg");
  background-size: cover;
 

  @media (max-width: 600px) {
    background: url("../../../public/images/mobile-hero-bg.jpg");
    background-size: cover;
  }
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 23vh 0;
`;

export const Form = styled.div`
  width: 414px;
  height: 456px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 553px;
  border-radius: 14px;
  background: #00000050;
  border-radius: 14px;
  /* backdrop-filter: blur(30px); / / está sobrepondo o header*/

  @media (max-width: 600px) {
    max-width: 414px;
    width: 80%;
  }

  h1 {
    color: #72efdb;
    font-size: 32px;
    font-family: rubik, sans-serif;
    font-weight: bold;
    margin-top: 62px;
  }

  input {
    border-bottom: 2px solid #e9e9f010;
    padding: 10px;
    margin: 20px;
    width: 90%;
    ::placeholder {
      color: #fff;
      font-size: 15px;
    }
  }
  button {
    border: 1px solid;
    width: 213px;
    height: 58px;
    text-align: center;
    border-radius: 32px;
    background-color: #72efdb;
    color: #0b1741;
    font-family: rubik, sans-serif;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 62px;
  }
`;
