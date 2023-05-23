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
import { useEffect, useState } from "react";
import { Buttonlogin, Linelogin } from "../login/style";
import balao from "../../images/balao.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Buttonlogin3,
  Buttonlogin4,
  Buttonup,
  Linelogin2,
  Linelogin3,
  Styleofcard,
  TextofPost,
} from "./style";
import { CreatePostApi, GetPostApi, getPostApi } from "../../api/Apis";
import { PostCard } from "./PostCard";

export const Posts = () => {
  const navigation = useNavigate();
  const [comments, setComments] = useState({});
  const [post, setPost] = useState("");
  const [controller, setController] = useState(false);
  const [posts, setPosts] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const body = {
    content: post,
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigation("/");
  };

  const changeComment = () => {
    navigation("/comments");
  };

  const changePost = (event) => {
    setPost(event.target.value);
  };

  const atualizarapagina = async () => {
    try {
      const result = await getPostApi(config);
      setPosts(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    atualizarapagina();
  }, [controller]);

  const Postar = async () => {
    const result = await CreatePostApi(config, body);
    setComments(result.data);
    toast.success("Post criado com sucesso!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setController(!controller);
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
        <HeaderofpagCreate>
          <Divofimagescreate src={logo} />
          <ButtonlogarCreate onClick={logout}>Logout</ButtonlogarCreate>
        </HeaderofpagCreate>
        <Divofalignitems>
          <TextofPost
            value={post}
            onChange={changePost}
            placeholder="Escreva seu post"
          ></TextofPost>
          <Buttonlogin4 onClick={Postar}>
            <b>Postar</b>
          </Buttonlogin4>
          <Linelogin3 />
          {posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </Divofalignitems>
      </BodyofpageCreate>
    </Modelspageoflogin>
  );
};
