import { useNavigate } from "react-router-dom";
import { Styleofcard } from "./style";
import balao from "../../images/balao.png";
import { GetUsersApi } from "../../api/Apis";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";

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
              Enviado por:<b> {name}</b>
            </h6>
            <div>{post.content}</div>
            <p></p>
          </div>
          <button className="glow-on-hover">⇧</button>
          <button className="glow-on-hover">⇩</button>
          <button onClick={changeComment}>
            <img src={balao} />
            number
          </button>
        </div>
      </div>
    </Styleofcard>
  );
};
