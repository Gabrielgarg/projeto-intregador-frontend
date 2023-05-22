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
import balao from "../../images/balao.png";
import {
  Buttonlogin3,
  Buttonlogin4,
  Buttonup,
  Linelogin2,
  Linelogin3,
  Styleofcard,
  TextofPost,
} from "./style";

export const Posts = () => {
  const navigation = useNavigate();

  const login = () => {
    navigation("/");
  };

  const changeComment = () => {
    navigation("/comments/");
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
            value={post}
            onChange={changePost}
            placeholder="Escreva seu post"
          ></TextofPost>
          <Buttonlogin4>
            <b>Postar</b>
          </Buttonlogin4>
          <Linelogin3 />
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
                  <div>comments</div>
                  <p></p>
                </div>
                <button className="glow-on-hover">⇧</button>
                <button className="glow-on-hover">⇩</button>
                <button onClick={changeComment}>
                  <img src={balao} />
                  number
                </button>
                {/* <div src={balao}></div> */}
                {/* <a className="btn_primary" href="#">
                  ->
                </a> */}
              </div>
            </div>
          </Styleofcard>
        </Divofalignitems>
      </BodyofpageCreate>
    </Modelspageoflogin>
  );
};
