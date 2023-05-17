import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { ErrorPage } from "./pages/errorpage/ErrorPage";
import { CreateUser } from "./pages/createUser/Createuser";

export const Paginas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="createaccount" element={<CreateUser />} />
        <Route path="socialmidia" />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
