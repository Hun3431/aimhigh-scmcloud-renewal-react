import { cn } from "cn-func";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../router";
import { atom, useAtom } from "jotai";
import XIcon from "../../icons/xIcon";

export const menuOpen = atom(false);

const Aside = () => {
  const [isOpen, setIsOpen] = useAtom(menuOpen);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    if (location.pathname === path) return;
    else {
      setIsOpen(false);
      navigate(path);
    }
  };

  return (
    <>
      <aside
        className={cn(
          isOpen ? "flex" : "hidden",
          "fixed top-0 sm:top-14 z-120",
          "sm:flex flex-col gap-2",
          "w-60 px-4 h-dvh sm:h-[calc(100dvh-56px)] bg-white",
          "overflow-x-scroll"
        )}
      >
        {isOpen && (
          <div className="h-14 py-2 block sm:hidden -translate-x-2">
            <button
              onClick={() => setIsOpen(false)}
              className="h-full p-2 rounded-lg hover:bg-gray-50"
            >
              <XIcon size={24} />
            </button>
          </div>
        )}
        <div className="flex flex-col gap-2 p-2 mt-0 sm:mt-2">
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
                    "w-full h-10 px-2 hover:bg-gray-50 border-dotted rounded-lg",
                    "text-black truncate capitalize",
                    location.pathname === route.path && "bg-gray-50"
                  )}
                >
                  {route.name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-110 block sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Aside;
