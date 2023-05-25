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
import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { LoginApi } from "../../api/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { validarEmail } from "../../../utils/regex";
import { validarSenha } from "../../../utils/regex";

export const Login = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dadosRecebidos, setDadosRecebidos] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPassworErr] = useState(false);

  const body = {
    email,
    password,
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (dadosRecebidos.message === "Login realizado com sucesso") {
      localStorage.setItem("token", JSON.stringify(dadosRecebidos.token));
      navigation("/socialmidia");
    }
  }, [dadosRecebidos]);

  const LoginUser = async () => {
    if (!validarEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!validarSenha.test(password)) {
      setPassworErr(true);
    } else {
      setPassworErr(false);
    }
    if (emailErr === false && passwordErr === false) {
      try {
        setCarregando(true);
        const result = await LoginApi(body);
        setDadosRecebidos(result.data);
      } catch (error) {
        setCarregando(true);
        toast.error("E-mail ou senha inválidos!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("erro:", error);
      }
    }
  };

  const SignupUser = () => {
    navigation("/createaccount");
  };

  return (
    <Modelspageoflogin>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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
            {emailErr && <p>Digite um e-mail válido!</p>}
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
            {passwordErr && (
              <div>
                Digite uma senha mais forte! Letra Maiuscula e minuscula,
                número, e caracter especial{" "}
              </div>
            )}
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
            {emailErr && <p>Digite um e-mail válido!</p>}
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
            {passwordErr && (
              <div>
                {" "}
                Digite uma senha mais forte! Letra Maiuscula e minuscula,
                número, e caracter especial !
              </div>
            )}
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
