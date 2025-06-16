import { cn } from "cn-func";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../router";

const Aside = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    if (location.pathname === path) return;
    else navigate(path);
  };

  return (
    <aside className="fixed top-14 w-60 p-4 h-[calc(100dvh-56px)] hidden sm:flex flex-col gap-2 overflow-x-scroll">
      {routes.map((value, index) => (
        <div key={index} className="flex flex-col gap-1 no-select">
          <div className="py-1 text-black font-bold capitalize">
            {value.label}
          </div>
          {value.route.map((route, index) => (
            <button
              key={index}
              onClick={() => {
                handleNavigate(route.path);
              }}
              className={cn(
                "flex flex-row justify-start items-center",
                "w-full h-10 px-2 hover:bg-gray-95 border-dotted rounded-lg",
                "text-black hover:text-gray-10 truncate capitalize",
                location.pathname === route.path && "bg-gray-95 text-gray-10"
              )}
            >
              {route.name}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Aside;
