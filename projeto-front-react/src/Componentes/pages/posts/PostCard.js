import { useNavigate } from "react-router-dom";
import {
  Alinhandoitens,
  Cardsofbutton2,
  Cardsofbuttons,
  Imageofbalao,
  Styleofcard,
} from "./style";
import balao from "../../images/balao.png";
import { GetUsersApi } from "../../api/Apis";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import Card from "react-bootstrap/Card";

export const PostCard = (props) => {
  const { post } = props;
  const navigation = useNavigate();
  const [users, setUsers] = useState([]);

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

  const changeComment = () => {
    localStorage.setItem("comment", JSON.stringify(post));
    navigation("/comments/");
  };

  let name = "";

  for (let x = 0; x < users.length; x++) {
    if (post.creatorId === users[x].id) {
      name = users[x].name;
    }
  }

  return (
    <Card style={{ width: "23rem" }}>
      <Card.Body>
        {/* <Card.Title>Enviado por: {name}</Card.Title> */}
        <Card.Subtitle className="mb-2 text-muted">
          Enviado por: {name}
        </Card.Subtitle>
        <Card.Title>{post.content}</Card.Title>
        <p></p>
        <Alinhandoitens>
          <Cardsofbuttons>
            <div className="glow-on-hover">⇧</div>
            <div>numb</div>
            <div className="glow-on-hover">⇩</div>
          </Cardsofbuttons>
          <Cardsofbutton2 onClick={changeComment}>
            <Imageofbalao src={balao} />
            <div>eaize</div>
          </Cardsofbutton2>
        </Alinhandoitens>
        {/* <Card></Card> */}
      </Card.Body>
    </Card>

    // <Styleofcard>
    /* <div className="wrapper">
        <div className="blog_post">
          <div className="img_pod">
            <img
              src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
              alt="imageofperson"
            />
          </div>
          <div className="bar">
            <h6>
              {" "}
              Enviado por:<b> {name}</b>
            </h6>
          </div>
          <p className="bar2">{post.content}</p>
          <button className="glow-on-hover">⇧</button>
          <button className="glow-on-hover">⇩</button>
          <button onClick={changeComment} src={balao}></button>
        </div>
      </div>
    </Styleofcard> */
  );
};
