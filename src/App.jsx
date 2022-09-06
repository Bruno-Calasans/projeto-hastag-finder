import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./App.style";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import About from "./pages/About";
import { useContext } from "react";

function App() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <div>Carregando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            exact
            path="/list"
            element={
              <Private>
                <List />
              </Private>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
