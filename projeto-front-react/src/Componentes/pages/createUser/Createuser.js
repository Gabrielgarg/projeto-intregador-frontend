import { Divofimageslogin } from "../login/style";
import {
  BodyofpageCreate,
  ButtonlogarCreate,
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

  const navigation = useNavigate();

  const login = () => {
    navigation("/");
  };
  return (
    <div>
      <Modelspageoflogin>
        <BodyofpageCreate>
          <HeaderofpagCreate>
            <Divofimagescreate src={logo} />
            <ButtonlogarCreate onClick={login}>Logar</ButtonlogarCreate>
          </HeaderofpagCreate>
          <Divofinputcreate>
            <FloatingLabel
              controlId="floatingInput"
              label="name"
              className="mb-3"
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
              className="mb-3"
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
        </BodyofpageCreate>
      </Modelspageoflogin>
    </div>
  );
};
