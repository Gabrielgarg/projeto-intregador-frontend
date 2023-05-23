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
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { GetUsersApi } from "../../api/Apis";

export const Comments = () => {
  const [comment, setComment] = useState("");
  const [users, setUsers] = useState([]);
  const navigation = useNavigate();
  const recievedComment = JSON.parse(localStorage.getItem("comment"));
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: token,
    },
  };

  useEffect(() => {
    atualizarapagina();
  }, []);

  const atualizarapagina = async () => {
    const result = await GetUsersApi(config);
    setUsers(result.data);
  };

  const login = () => {
    navigation("/");
  };
  const posts = () => {
    localStorage.removeItem("comment");
    navigation("/socialmidia");
  };

  const changeComments = (event) => {
    setComment(event.target.value);
  };

  let name = "";

  for (let x = 0; x < users.length; x++) {
    if (recievedComment.creatorId === users[x].id) {
      name = users[x].name;
    }
  }
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
              <Card.Header>Enviado por: {name}</Card.Header>
              <Card.Body>
                <Card.Title>{recievedComment.content}</Card.Title>
                {/* <Card.Text>{recievedComment.content}</Card.Text> */}
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
