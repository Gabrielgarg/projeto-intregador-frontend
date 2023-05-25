import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { ErrorPage } from "./pages/errorpage/ErrorPage";
import { CreateUser } from "./pages/createUser/Createuser";
import { Posts } from "./pages/posts/Posts";
import { Comments } from "./pages/posts/Comments";
import { useState } from "react";

export const Paginas = () => {
  const [postorcomment, setPostorcomment] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="createaccount" element={<CreateUser />} />
        <Route
          path="socialmidia"
          element={
            <Posts
              setPostorcomment={setPostorcomment}
              postorcomment={postorcomment}
            />
          }
        />
        <Route
          path="comments/"
          element={
            <Comments
              setPostorcomment={setPostorcomment}
              postorcomment={postorcomment}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
