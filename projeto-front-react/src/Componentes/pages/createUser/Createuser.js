import { Buttonlogin, Divofimageslogin } from "../login/style";
import {
  BodyofpageCreate,
  ButtonlogarCreate,
  Buttonlogin2,
  Divofalignitems,
  Divoffrase,
  Divoffrase2,
  Divofimagescreate,
  Divofinputcreate,
  HeaderofpagCreate,
  Modelspageoflogin,
} from "./style";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export const CreateUser = () => {
  const navigation = useNavigate();
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeSenha = (event) => {
    setSenha(event.target.value);
  };

  const changeApelido = (event) => {
    setApelido(event.target.value);
  };

  const login = () => {
    navigation("/");
  };

  const signup = () => {
    navigation("/socialmidia");
  };
  return (
    <div>
      <Modelspageoflogin>
        <BodyofpageCreate>
          <HeaderofpagCreate>
            <Divofimagescreate src={logo} />
            <ButtonlogarCreate onClick={login}>Logar</ButtonlogarCreate>
          </HeaderofpagCreate>
          <Divofalignitems>
            <Divoffrase>
              <h1>Olá seja bem vindo!!</h1>
            </Divoffrase>
            <Divofinputcreate>
              <FloatingLabel
                controlId="floatingInput"
                label="Apelido"
                className="mb-2"
              >
                <Form.Control
                  value={apelido}
                  onChange={changeApelido}
                  type="name"
                  placeholder="Felizberto"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="E-mail"
                className="mb-2"
              >
                <Form.Control
                  value={email}
                  onChange={changeEmail}
                  type="email"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                value={senha}
                onChange={changeSenha}
                controlId="floatingPassword"
                label="Senha"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </Divofinputcreate>
            <Divoffrase2>
              <p>
                Ao continuar, você concorda com o nosso{" "}
                <a href="">Contrato de usuário</a> e nossa
                <a href=""> Política de Privacidade</a>
              </p>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Eu concordo em receber e-mails sobre coisas legais do Labbeddit"
                />
              </Form>
              <Buttonlogin2 onClick={signup}>
                <b>Cadastrar</b>
              </Buttonlogin2>
            </Divoffrase2>
          </Divofalignitems>
        </BodyofpageCreate>
      </Modelspageoflogin>
    </div>
  );
};
