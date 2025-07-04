import { Outlet } from "react-router-dom";
import DocsTitle from "./docsTitle";
import Aside from "./aside";
import Header from "./header";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col w-full h-dvh overflow-x-scroll">
      <div className="flex flex-row justify-center w-full min-w-2xs">
        <Header />
      </div>
      <div className="flex-1 flex flex-row justify-center w-full min-w-2xs">
        <main className="flex flex-row justify-start w-full max-w-7xl min-w-2xs h-[calc(100dvh-56px)]">
          <Aside />
          <div className="flex-1 px-6 sm:ml-60">
            <div className="flex flex-col gap-4 mx-auto min-w-2xs w-full h-full overflow-y-scroll">
              <DocsTitle />
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
