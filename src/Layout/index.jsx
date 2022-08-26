
import { Button } from '../components/Button'
import { ButtonsWrapper, Header, Logo, Footer, Main } from './styled'

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
    <Main>
      {children}
    </Main>
    <Footer>
      @Newtab Academy 2022. Todos os direitos reservados
      dd
    </Footer>
    </>
  ) 
}