export function Layout ({children}){
  return (
    <>
    <header>
      Olá eu sou o header
    </header>
    <main>
      {children}
    </main>
    <footer>
      Olá eu sou o footer
    </footer>
    </>
  ) 
}