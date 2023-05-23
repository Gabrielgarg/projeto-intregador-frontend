import { useNavigate } from "react-router-dom";
import { Styleofcard } from "./style";
import balao from "../../images/balao.png";

export const PostCard = () => {
  const navigation = useNavigate();

  const changeComment = () => {
    navigation("/comments/");
  };

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
        </div>
      </div>
    </Styleofcard>
  );
};
