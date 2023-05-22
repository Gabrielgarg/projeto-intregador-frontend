import { useNavigate } from "react-router-dom";
import {
  BodyofpageCreate,
  ButtonlogarCreate,
  Divofalignitems,
  Divofimagescreate,
  HeaderofpagCreate,
  Modelspageoflogin,
} from "../createUser/style";
import {
  Buttonlogin3,
  Divofclosebutton,
  Linelogin2,
  Styledofcomment,
  Styleofcard,
  Styleofcard2,
  Styleofcard3,
  TextofPost,
  TextofPost2,
} from "./style";
import logo from "../../images/logo.png";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export const Comments = () => {
  const [comment, setComment] = useState("");

  const navigation = useNavigate();

  const login = () => {
    navigation("/");
  };
  const posts = () => {
    navigation("/socialmidia");
  };

  const changeComments = (event) => {
    setComment(event.target.value);
  };
  return (
    <Modelspageoflogin>
      <BodyofpageCreate>
        <HeaderofpagCreate>
          <Divofclosebutton onClick={posts}>x</Divofclosebutton>
          <Divofimagescreate src={logo} />
          <ButtonlogarCreate onClick={login}>Logout</ButtonlogarCreate>
        </HeaderofpagCreate>
        <Divofalignitems>
          <Styledofcomment>
            <Card border="info" style={{ width: "22rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Styledofcomment>
          <TextofPost2
            value={comment}
            onChange={changeComments}
            placeholder="Adicionar comentário"
          ></TextofPost2>
          <Buttonlogin3>
            <b>Responder</b>
          </Buttonlogin3>
          <Linelogin2 />
          <Styleofcard3>
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
                <button>uparrow</button>
                <button>donwarrow</button>
              </div>
            </div>
          </Styleofcard3>
        </Divofalignitems>
      </BodyofpageCreate>
    </Modelspageoflogin>
  );
};
