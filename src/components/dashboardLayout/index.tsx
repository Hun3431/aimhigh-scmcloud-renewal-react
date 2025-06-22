import { Outlet } from "react-router-dom";
import Header from "./header";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col w-full h-dvh">
      <div className="flex flex-row justify-center w-full min-w-6xl bg-blue-500">
        <Header />
      </div>
      <div className="flex-1 flex flex-row justify-center w-full min-w-2xs">
        <main className="flex flex-col justify-start w-full min-w-6xl max-w-7xl h-[calc(100dvh-56px)] overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
