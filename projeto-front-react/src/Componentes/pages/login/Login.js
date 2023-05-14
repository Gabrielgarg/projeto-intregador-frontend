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
import image1 from "../../images/red.png";
import image2 from "../../images/yellow.png";
import image3 from "../../images/black.png";
import image4 from "../../images/gray.png";
import { Signup } from "../../api/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
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

  const SignupUser = async () => {
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
              <img src={image1} />
              <img src={image2} />
              <img src={image3} />
              <img src={image4} />
            </Divofimageslogin>
            <b>LabEddit</b>
            <p>O projeto de rede social da Labenu</p>
          </Divabovelogin>

          <Divofinputlogin>
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
              value={password}
              onChange={changePassword}
              controlId="floatingPassword"
              label="Senha"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Divofinputlogin>
          <Buttonlogin onClick={SignupUser}>
            <b>Continuar</b>
          </Buttonlogin>
          <Linelogin />
          <Buttonlogin2>
            <b>Crie uma conta!</b>
          </Buttonlogin2>
        </Divofpagelogin>
      ) : (
        <Divofpagelogin>
          <Divabovelogin>
            <Divofimageslogin>
              <img src={image1} />
              <img src={image2} />
              <img src={image3} />
              <img src={image4} />
            </Divofimageslogin>
            <b>LabEddit</b>
            <p>O projeto de rede social da Labenu</p>
          </Divabovelogin>

          <Divofinputlogin>
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
              value={password}
              onChange={changePassword}
              controlId="floatingPassword"
              label="Senha"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Divofinputlogin>
          <Buttonlogin onClick={SignupUser}>
            <b>Continuar</b>
          </Buttonlogin>
          <Linelogin />
          <Buttonlogin2>
            <b>Crie uma conta!</b>
          </Buttonlogin2>
        </Divofpagelogin>
      )}
    </Modelspageoflogin>
  );
};
