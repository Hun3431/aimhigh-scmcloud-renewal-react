import { Outlet } from "react-router-dom";
import Header from "./header";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col w-full overflow-x-scroll h-dvh">
      <div className="flex flex-row justify-center w-full min-w-7xl bg-blue-500">
        <Header />
      </div>
      <div className="flex-1 flex flex-row xl:justify-center justify-normal w-full min-w-7xl bg-gray-50">
        <main className="flex flex-col justify-start w-full min-w-7xl max-w-9xl h-[calc(100dvh-56px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
