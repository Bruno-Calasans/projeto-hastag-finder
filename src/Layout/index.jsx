
import './style'

export function Layout ({children}){

import { Button } from '../components/Button'
import { ButtonsWrapper, Header, Logo } from './styled'

export function Layout ({isLoggedIn ,route ,children}){

  return (
    <>
    <Header>
      <Logo>
        hashtag<span>finder</span>
      </Logo>

      <ButtonsWrapper>
      {route === "home" ? (
        <Button type="about"/> 
      ) : (
        <Button type="home"/>
      )}
      {isLoggedIn? (
        <Button type="logoff"/>
      ) : (
        <Button type="login"/>
      )}
      </ButtonsWrapper>
    </Header>
    <main>
      {children}
    </main>
    <footer>
      Olá eu sou o footer
    </footer>
    </>
  ) 
}