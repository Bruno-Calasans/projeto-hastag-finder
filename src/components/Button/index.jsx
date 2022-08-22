import { ButtonBase, Home, Info, LogOff, Person } from "./styled";
import { useNavigate } from "react-router-dom";

export function Button({type}){
  const navigate = useNavigate()
  
  function handleClick(route){
    navigate(route, { replace: true })
  }

  switch (type) {
    case "login":
      return  <ButtonBase 
              color="blue"
              onClick={() => handleClick("/login")}
              >
                <Person/> 
                <span>login</span>
              </ButtonBase>
    case "logoff":
      return  <ButtonBase 
              color="blue"
              onClick={() => handleClick("/")}
              >
                <LogOff/> 
                <span>Sair</span>
            </ButtonBase>
    case "home":
      return  <ButtonBase 
              color="green"
              onClick={() => handleClick("/")}
              >
                <Home/> 
                <span>Home</span>
              </ButtonBase>
    case "about":
      return  <ButtonBase 
              color="green"
              onClick={() => handleClick("/about")}
              >
                <Info/>
                <span>Sobre</span>
              </ButtonBase>
    default:
      return <></> 
  }
}