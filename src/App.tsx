import GlobalDialog from "./components/feedback/dialog";
import GlobalToast from "./components/feedback/toast";
import Router from "./router";

const App = () => {
  return (
    <>
      <Router />
      <GlobalDialog />
      <GlobalToast />
    </>
  );
};

export default App;
