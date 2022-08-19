import { ButtonBase, Home, Info, LogOff, Person } from "./styled";

export function Button({type}){
  switch (type) {
    case "login":
      return <ButtonBase color="blue">
              <Person/> 
                <span>login</span>
              </ButtonBase>
    case "logoff":
      return <ButtonBase color="blue">
              <LogOff/> 
              <span>Sair</span>
            </ButtonBase>
    case "home":
      return <ButtonBase color="green">
              <Home/> 
              <span>Home</span>
            </ButtonBase>
    case "about":
      return <ButtonBase color="green">
                <Info/> 
                <span>Sobre</span>
              </ButtonBase>
    default:
      return <></> 
  }
}