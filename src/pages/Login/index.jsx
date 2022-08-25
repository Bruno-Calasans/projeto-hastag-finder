import { Layout } from "../../Layout";
import { LoginSection, Form, Back } from "./style";
export default function Login() {
  return (
    <Back>
      <Layout>
        <LoginSection>
          <Form>
            <h1>Login</h1>
            <input type="text" placeholder="Usuário"></input>
            <input type="password" placeholder="Senha"></input>
            <button>ACESSAR</button>
          </Form>
        </LoginSection>
      </Layout>
    </Back>
  );
}
