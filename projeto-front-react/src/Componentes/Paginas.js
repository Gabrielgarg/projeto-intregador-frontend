import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { ErrorPage } from "./pages/errorpage/ErrorPage";

export const Paginas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="createaccount" />
        <Route path="socialmidia" />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
