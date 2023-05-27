import {
  ButtonlogarCreate,
  Divofalignitems,
  DivofalignitemsAbouve,
  Divofimagescreate,
  HeaderofpagCreate,
  Modelspageoflogin,
} from "../createUser/style";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BodyofpagePost, Buttonlogin4, Linelogin3, TextofPost } from "./style";
import { CreatePostApi, getPostApi } from "../../api/Apis";
import { PostCard } from "./PostCard";

export const Posts = (props) => {
  const navigation = useNavigate();
  const [post, setPost] = useState("");
  const [controller, setController] = useState(false);
  const [posts, setPosts] = useState([]);

  props.setPostorcomment(false);

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
    await CreatePostApi(config, body);
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
      <BodyofpagePost>
        <HeaderofpagCreate>
          <Divofimagescreate src={logo} />
          <ButtonlogarCreate onClick={logout}>Logout</ButtonlogarCreate>
        </HeaderofpagCreate>
        <DivofalignitemsAbouve>
          <TextofPost
            value={post}
            onChange={changePost}
            placeholder="Escreva seu post"
          ></TextofPost>
          <Buttonlogin4 onClick={Postar}>
            <b>Postar</b>
          </Buttonlogin4>
          <Linelogin3 />
        </DivofalignitemsAbouve>
        <Divofalignitems>
          {posts
            .sort((atual, proximo) => {
              if (atual.likes < proximo.likes) {
                return 1;
              } else if (atual.likes > proximo.likes) {
                return -1;
              } else {
                return posts;
              }
            })
            .map((post) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                  setPostorcomment={props.setPostorcomment}
                  postorcomment={props.postorcomment}
                />
              );
            })}
        </Divofalignitems>
      </BodyofpagePost>
    </Modelspageoflogin>
  );
};
