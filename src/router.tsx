import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import NotFoundPage from "./pages/notfound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
