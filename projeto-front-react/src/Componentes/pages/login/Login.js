import {
  Buttonlogin,
  Buttonlogin2,
  Divabovelogin,
  Divofimageslogin,
  Divofinputlogin,
  Divofpagelogin,
  Linelogin,
  Modelspageoflogin,
} from "./style";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Signup } from "../../api/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

export const Login = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dadosRecebidos, setDadosRecebidos] = useState({});
  const [carregando, setCarregando] = useState(false);

  const body = {
    email: email,
    password: password,
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const LoginUser = async () => {
    try {
      setCarregando(true);
      const result = await Signup(body);
      setDadosRecebidos(result);
      localStorage.setItem("Token", JSON.stringify(result.token));
      setCarregando(false);
    } catch (error) {
      setCarregando(true);
      toast.error("E-mail ou senha inválidos!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("erro:", error);
    }
  };

  const SignupUser = () => {
    navigation("/createaccount");
  };

  //   () => Adicionapokemon(props.pokemon.id)

  return (
    <Modelspageoflogin>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {carregando === false ? (
        <Divofpagelogin>
          <Divabovelogin>
            <Divofimageslogin>
              <img src={logo} />
            </Divofimageslogin>
            <b>LabEddit</b>
            <p>O projeto de rede social da Labenu</p>
          </Divabovelogin>

          <Divofinputlogin>
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
              value={password}
              onChange={changePassword}
              controlId="floatingPassword"
              label="Senha"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Divofinputlogin>
          <Buttonlogin onClick={LoginUser}>
            <b>Logar</b>
          </Buttonlogin>
          <Linelogin />
          <Buttonlogin2 onClick={SignupUser}>
            <b>Crie uma conta!</b>
          </Buttonlogin2>
        </Divofpagelogin>
      ) : (
        <Divofpagelogin>
          <Divabovelogin>
            <Divofimageslogin>
              <img src={logo} />
            </Divofimageslogin>
            <b>LabEddit</b>
            <p>O projeto de rede social da Labenu</p>
          </Divabovelogin>

          <Divofinputlogin>
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
              value={password}
              onChange={changePassword}
              controlId="floatingPassword"
              label="Senha"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Divofinputlogin>
          <Buttonlogin onClick={LoginUser}>
            <b>Logar</b>
          </Buttonlogin>
          <Linelogin />
          <Buttonlogin2 onClick={SignupUser}>
            <b>Crie uma conta!</b>
          </Buttonlogin2>
        </Divofpagelogin>
      )}
    </Modelspageoflogin>
  );
};
