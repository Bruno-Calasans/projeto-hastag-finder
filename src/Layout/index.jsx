
import { Button } from '../components/Button'
import { ButtonsWrapper, Header, Logo, Footer } from './styled'

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
    <Footer>
      @Newtab Academy 2022. Todos os direitos reservados
    </Footer>
    </>
  ) 
}