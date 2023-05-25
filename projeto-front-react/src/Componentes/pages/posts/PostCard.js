import { useNavigate } from "react-router-dom";
import {
  Alinhandoitens,
  ArrumandoosCards,
  Cardsofbutton2,
  Cardsofbuttons,
  Imageofbalao,
  Styleofcard,
} from "./style";
import balao from "../../images/balao.png";
import { GetUsersApi, likeApi, likeApiComment } from "../../api/Apis";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import Card from "react-bootstrap/Card";

export const PostCard = (props) => {
  // const { post } = props;
  const navigation = useNavigate();
  const [users, setUsers] = useState([]);
  // console.log(props.postorcomment);

  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    like: true,
  };

  useEffect(() => {
    atualizarapagina();
  }, []);

  const atualizarapagina = async () => {
    const result = await GetUsersApi(config);
    setUsers(result.data);
  };

  const changeComment = () => {
    localStorage.setItem("comment", JSON.stringify(props.post));
    navigation("/comments/");
  };

  let name = "";

  for (let x = 0; x < users.length; x++) {
    if (props.post.creatorId === users[x].id) {
      name = users[x].name;
    }
  }

  const like = async () => {
    await likeApi(config, body, props.post.id);
  };

  return (
    <ArrumandoosCards>
      <Card style={{ width: "23rem" }}>
        {props.postorcomment === false ? (
          <Card.Body>
            {/* <Card.Title>Enviado por: {name}</Card.Title> */}
            <Card.Subtitle className="mb-2 text-muted">
              Enviado por: {name}
            </Card.Subtitle>
            <Card.Title>{props.post.content}</Card.Title>
            <p></p>
            <Alinhandoitens>
              <Cardsofbuttons>
                <button onClick={like} className="glow-on-hover">
                  ⇧
                </button>
                <div>{props.post.likes}</div>
                <button onClick={like} className="glow-on-hover">
                  ⇩
                </button>
              </Cardsofbuttons>
              <Cardsofbutton2 onClick={changeComment}>
                <Imageofbalao src={balao} />
                <div>eaize</div>
              </Cardsofbutton2>
            </Alinhandoitens>
            {/* <Card></Card> */}
          </Card.Body>
        ) : (
          <Card.Body>
            {/* <Card.Title>Enviado por: {name}</Card.Title> */}
            <Card.Subtitle className="mb-2 text-muted">
              Enviado por: {name}
            </Card.Subtitle>
            <Card.Title>{props.post.content}</Card.Title>
            <p></p>
            <Alinhandoitens>
              <Cardsofbuttons>
                <button onClick={like} className="glow-on-hover">
                  ⇧
                </button>
                <div>{props.post.likes}</div>
                <button onClick={like} className="glow-on-hover">
                  ⇩
                </button>
              </Cardsofbuttons>
            </Alinhandoitens>
            {/* <Card></Card> */}
          </Card.Body>
        )}
      </Card>
    </ArrumandoosCards>
  );
};
