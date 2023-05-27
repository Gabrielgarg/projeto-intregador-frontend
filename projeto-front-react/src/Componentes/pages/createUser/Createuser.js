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
import { useRef, useState } from "react";
import { CreateUserApi } from "../../api/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validarEmail } from "../../../utils/regex";
import { validarSenha } from "../../../utils/regex";
import { FormofButton, Formofpassword, SizeofForm } from "../posts/style";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export const CreateUser = () => {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [verification, setVerification] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPassworErr] = useState(false);
  const inputRef = useRef(null);
  const [eyeIsClosed, setEyeState] = useState(true);

  const toggleShow = () => {
    if (inputRef.current.type === "password") {
      setEyeState(false);
      inputRef.current.type = "text";
    } else {
      setEyeState(true);
      inputRef.current.type = "password";
    }
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeSenha = (event) => {
    setPassword(event.target.value);
  };

  const changeApelido = (event) => {
    setName(event.target.value);
  };

  const body = {
    name,
    email,
    password,
  };

  const login = () => {
    navigation("/");
  };

  function validation() {
    setVerification(true);
  }

  const signup = async () => {
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
    if (name.length < 3) {
      toast.error(
        `Digite corretamente o campo 'Apelido'  Minímo 3 letras/números`,
        {
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
    if (verification === false) {
      toast.error(`Porfavor concordar com os termos`, {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (
      emailErr === false &&
      passwordErr === false &&
      name.length >= 3 &&
      verification === true
    ) {
      try {
        const result = await CreateUserApi(body);
        setUser(result.data);
        if (user.message === "Cadastro realizado com sucesso") {
          localStorage.setItem("token", JSON.stringify(user.token));
          navigation("/socialmidia");
        }
      } catch (error) {
        toast.error(`E-mail ja cadastrado.`, {
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
    }
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
      <BodyofpageCreate>
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
                  required
                  value={name}
                  onChange={changeApelido}
                  type="name"
                  placeholder="Felizberto"
                />
              </FloatingLabel>
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
              <Formofpassword>
                <SizeofForm>
                  <FloatingLabel
                    value={password}
                    onChange={changeSenha}
                    controlId="floatingPassword"
                    label="Senha"
                  >
                    <Form.Control
                      ref={inputRef}
                      type="password"
                      placeholder="Password"
                    />
                  </FloatingLabel>
                </SizeofForm>
                <FormofButton onClick={toggleShow}>
                  {eyeIsClosed ? <VscEyeClosed /> : <VscEye />}
                </FormofButton>
              </Formofpassword>
              {passwordErr && (
                <div>
                  <b>
                    Digite uma senha mais forte! Letra Maiuscula e minuscula,
                    número, e caracter especial{" "}
                  </b>
                </div>
              )}
            </Divofinputcreate>
            <Divoffrase2>
              <p>
                Ao continuar, você concorda com o nosso{" "}
                <a href="">Contrato de usuário</a> e nossa
                <a href=""> Política de Privacidade</a>
              </p>
              <Form>
                <Form.Check
                  onClick={validation}
                  type="switch"
                  id="custom-switch"
                  label="Eu concordo com os termos, e em receber e-mails sobre coisas legais do Labbeddit"
                />
              </Form>
              <Buttonlogin2 onClick={signup}>
                <b>Cadastrar</b>
              </Buttonlogin2>
            </Divoffrase2>
          </Divofalignitems>
        </div>
      </BodyofpageCreate>
    </Modelspageoflogin>
  );
};
