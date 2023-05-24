import { useNavigate } from "react-router-dom";
import {
  BodyofpageCreate,
  ButtonlogarCreate,
  Divofalignitems,
  Divofalignitems3,
  DivofalignitemsAbouve,
  Divofimagescreate,
  HeaderofpagCreate,
  Modelspageoflogin,
} from "../createUser/style";
import {
  BodyofpageComments,
  BodyofpagePost,
  Buttonlogin3,
  Divofclosebutton,
  Linelogin2,
  Styledofcomment,
  Styleofcard,
  Styleofcard2,
  Styleofcard3,
  TextofComment,
  TextofPost,
  TextofPost2,
} from "./style";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { GetCommentsApi, GetUsersApi } from "../../api/Apis";

export const Comments = () => {
  const [comment, setComment] = useState("");
  const [users, setUsers] = useState([]);
  const [commentsofPost, setCommentsOfPost] = useState([]);
  const navigation = useNavigate();
  const recievedComment = JSON.parse(localStorage.getItem("comment"));
  const token = JSON.parse(localStorage.getItem("token"));

  //Token do usuario
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    id: recievedComment.id,
  };

  useEffect(() => {
    atualizarapagina();
  }, []);

  const atualizarapagina = async () => {
    const result = await GetUsersApi(config);
    setUsers(result.data);
    const comments = await GetCommentsApi(config, body);
    setCommentsOfPost(comments.data);
    console.log(commentsofPost);
    // const comments = await
  };

  const login = () => {
    localStorage.removeItem("comment");
    localStorage.removeItem("token");
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
      <BodyofpageComments>
        <HeaderofpagCreate>
          <Divofclosebutton onClick={posts}>x</Divofclosebutton>
          <Divofimagescreate src={logo} />
          <ButtonlogarCreate onClick={login}>Logout</ButtonlogarCreate>
        </HeaderofpagCreate>
        <DivofalignitemsAbouve>
          <Styledofcomment>
            <Card border="info" style={{ width: "22rem" }}>
              <Card.Header>Enviado por: {name}</Card.Header>
              <Card.Body>
                <Card.Title>{recievedComment.content}</Card.Title>
                {/* <Card.Text>{recievedComment.content}</Card.Text> */}
              </Card.Body>
            </Card>
          </Styledofcomment>
          <TextofComment
            value={comment}
            onChange={changeComments}
            placeholder="Adicionar comentário"
          ></TextofComment>
          <Buttonlogin3>
            <b>Responder</b>
          </Buttonlogin3>
          <Linelogin2 />
        </DivofalignitemsAbouve>
        <Divofalignitems3></Divofalignitems3>
      </BodyofpageComments>
    </Modelspageoflogin>
  );
};
