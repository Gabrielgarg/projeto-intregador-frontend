import { Buttonlogin, Divofimageslogin } from "../login/style";
import {
  BodyofpageCreate,
  ButtonlogarCreate,
  Buttonlogin2,
  Divofalignitems,
  DivofalignitemsCreate,
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
import { CreateUserApi } from "../../api/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateUser = () => {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState({});
  const [verification, setVerification] = useState(true);
  const [verification2, setVerification2] = useState(true);

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeSenha = (event) => {
    setSenha(event.target.value);
  };

  const changeApelido = (event) => {
    setName(event.target.value);
  };

  const body = {
    name,
    email,
    password: senha,
  };

  const login = () => {
    navigation("/");
  };

  const signup = async () => {
    try {
      const result = await CreateUserApi(body);
      setUser(result.data);
      console.log(user);
      if (user.message === "Cadastro realizado com sucesso") {
        localStorage.setItem("token", JSON.stringify(user.token));
        setVerification(true);
        navigation("/socialmidia");
      }
    } catch (error) {
      toast.error("Já existe esse usuário, e precisa concordar com o termo!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setVerification(false);
    }
  };

  const validation = () => {
    setVerification2(!verification2);
    if (verification2 === false) {
      toast.error("Para acessar, você precisa aceitar os nossos termos!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <Modelspageoflogin>
        {verification === true ? (
          <BodyofpageCreate>
            {verification2 === true ? (
              <div>
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
                        value={name}
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
                        // onClick={validation}
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
              </div>
            ) : (
              <div>
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
                        value={name}
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
                        // onClick={validation}
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
              </div>
            )}
          </BodyofpageCreate>
        ) : (
          <BodyofpageCreate>
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
                    value={name}
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
                    // onClick={validation}
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
        )}
      </Modelspageoflogin>
    </div>
  );
};
