import styled, { css } from 'styled-components'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'
import { InfoCircleFill } from '@styled-icons/bootstrap/InfoCircleFill'
import { HouseDoorFill } from '@styled-icons/bootstrap/HouseDoorFill'
import { Power } from '@styled-icons/bootstrap/Power'

export const Person = styled(PersonFill)`
  height: 14px;
  line-height: 16px;
`
export const Info = styled(InfoCircleFill)`
  height: 14px;
  line-height: 16px;
`
export const Home = styled(HouseDoorFill)`
  height: 14px;
  line-height: 16px;
`
export const LogOff = styled(Power)`
  height: 14px;
  line-height: 16px;
`

export const ButtonBase = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  
  width: 45%;
  height: 100%;

  border-radius: 2em;

  ${props => props.color === "green" && css`
  background-color: #72EFDB;
  color: #0B1741;
  `}

  ${props => props.color === "blue" && css`
  background-color: #1E3E7B;
  color: #FFFFFF;
  `}

  >span {
    padding: 3px 0 0 0;
    line-height:16px;
  }

  @media (max-width: 460px){
    width: 50%;
    gap: 3px;
  }
`