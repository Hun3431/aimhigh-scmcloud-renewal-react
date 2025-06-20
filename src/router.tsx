import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import NotFoundPage from "./pages/notfound";
import DefaultLayout from "./components/layout";
import Docs from "./pages/docs";
import IconsPage from "./pages/docs/Icons";
import DialogPage from "./pages/docs/feedback/dialog";
import ToastPage from "./pages/docs/feedback/toast";
import MenuPage from "./pages/docs/component/menu";
import ContainerPage from "./pages/docs/component/container";
import CenterToastPage from "./pages/docs/feedback/centerToast";
import ButtonPage from "./pages/docs/form/button";
import InputPage from "./pages/docs/form/input";
import TagPage from "./pages/docs/form/tag";

interface RouteType {
  name: string;
  path: string;
}

interface RoutesType {
  label: string;
  route: RouteType[];
}

export const routes: RoutesType[] = [
  {
    label: "docs",
    route: [
      { name: "introduction", path: "/docs/introduction" },
      // { name: "getting started", path: "/docs/getting-started" },
    ],
  },
  {
    label: "icon",
    route: [{ name: "icons", path: "/docs/icons" }],
  },
  {
    label: "form",
    route: [
      { name: "button", path: "/docs/button" },
      { name: "input", path: "/docs/input" },
      { name: "tag", path: "/docs/tag" },
      // { name: "textarea", path: "/docs/textarea" },
      // { name: "radio", path: "/docs/radio" },
      // { name: "select", path: "/docs/select" },
    ],
  },
  {
    label: "feedback",
    route: [
      { name: "dialog", path: "/docs/dialog" },
      { name: "toast", path: "/docs/toast" },
      { name: "centerToast", path: "/docs/centerToast" },
    ],
  },
  {
    label: "component",
    route: [
      { name: "menu", path: "/docs/menu" },
      { name: "container", path: "/docs/container" },
    ],
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="docs" element={<DefaultLayout />}>
          <Route index element={<Docs />} />
          <Route path="introduction" element={<Docs />} />
          <Route path="icons" element={<IconsPage />} />
          <Route path="button" element={<ButtonPage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="tag" element={<TagPage />} />
          {/* <Route path="textarea" element={<TextareaPage />} /> */}
          {/* <Route path="radio" element={<RadioPage />} /> */}
          {/* <Route path="select" element={<SelectPage />} /> */}
          <Route path="dialog" element={<DialogPage />} />
          <Route path="toast" element={<ToastPage />} />
          <Route path="centerToast" element={<CenterToastPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="container" element={<ContainerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
