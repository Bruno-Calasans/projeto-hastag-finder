import { Layout } from "../../Layout";
import React from "react";
import { LoginSection, Back, FormArea } from "./style";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [userLog, setUserLog] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const api = useApi();

  useEffect(() => {
    api.getUser(email).then(setUserLog);
  });

  const handleLogin = () => {
    if (userLog !== null && senha === userLog.Senha) {
      console.log("submit", { email, senha });
      login(email, senha);
      navigate("/list");
    } else {
      setErrorMessage("Usuário e/ou senha inválidos!");
      setEmail("");
      setSenha("");
    }
  };

  return (
    <Back>
      <Layout>
        <LoginSection>
          <FormArea>
            <h1>Login</h1>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Usuário"
            />
            <input
              type="password"
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
            />
            <span>{errorMessage}</span>
            <button onClick={handleLogin} type="submit">
              ACESSAR
            </button>
          </FormArea>
        </LoginSection>
      </Layout>
    </Back>
  );
}
