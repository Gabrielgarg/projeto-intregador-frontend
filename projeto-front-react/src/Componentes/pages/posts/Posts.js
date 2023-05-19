import {
  BodyofpageCreate,
  ButtonlogarCreate,
  Divofalignitems,
  Divofimagescreate,
  HeaderofpagCreate,
  Modelspageoflogin,
} from "../createUser/style";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Buttonlogin, Linelogin } from "../login/style";
import { Buttonlogin3, Linelogin2, Styleofcard, TextofPost } from "./style";

export const Posts = () => {
  const navigation = useNavigate();

  const login = () => {
    navigation("/");
  };

  const [post, setPost] = useState("");

  const changePost = (event) => {
    setPost(event.target.value);
  };

  return (
    <Modelspageoflogin>
      <BodyofpageCreate>
        <HeaderofpagCreate>
          <Divofimagescreate src={logo} />
          <ButtonlogarCreate onClick={login}>Logout</ButtonlogarCreate>
        </HeaderofpagCreate>
        <Divofalignitems>
          <TextofPost
            onChange={changePost}
            placeholder="Escreva seu post"
          ></TextofPost>
          <Buttonlogin3>
            <b>Postar</b>
          </Buttonlogin3>
          <Linelogin2 />
          <Styleofcard>
            <div className="wrapper">
              <div className="blog_post">
                <div className="img_pod">
                  <img
                    src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
                    alt="imageofperson"
                  />
                </div>
                <div className="container_copy">
                  <h6>
                    {" "}
                    Enviado por:<b>gabriel</b>
                  </h6>
                  <p></p>
                </div>
                <a className="btn_primary" href="#">
                  >
                </a>
              </div>
            </div>
          </Styleofcard>
        </Divofalignitems>
      </BodyofpageCreate>
    </Modelspageoflogin>
  );
};
