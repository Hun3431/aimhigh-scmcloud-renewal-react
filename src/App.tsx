import GlobalDialog from "./components/feedback/dialog";
import GlobalToast from "./components/feedback/toast";
import CenterToast from "./components/feedback/toast copy";
import Router from "./router";

const App = () => {
  return (
    <>
      <Router />
      <GlobalDialog />
      <GlobalToast />
      <CenterToast />
    </>
  );
};

export default App;
