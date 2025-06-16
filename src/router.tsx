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
      // { name: "button", path: "/docs/button" },
      // { name: "input", path: "/docs/input" },
      // { name: "label", path: "/docs/label" },
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
          <Route path="dialog" element={<DialogPage />} />
          <Route path="toast" element={<ToastPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="container" element={<ContainerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
