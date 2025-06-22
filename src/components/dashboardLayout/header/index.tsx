import { cn } from "cn-func";
import { Menu } from "../../component/menu";
import { useLocation, useNavigate } from "react-router-dom";
import { dashboardRoute } from "../../../router";
import { ArrowLogoutIcon, BellIcon } from "../../icons/flowmate";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (url: string) => {
    if (location.pathname === url) return;
    else navigate(url);
  };
  return (
    <header
      className={cn(
        "sticky top-0 z-100",
        "flex flex-row justify-between items-center gap-4",
        "min-w-7xl max-w-10xl w-full h-[4.5rem] pr-4"
      )}
    >
      <button
        className="hidden sm:flex items-center text-2xl font-bold text-white"
        onClick={() => handleMenuClick("/dashboard")}
      >
        <img
          src="/logo.png"
          alt="logo"
          width={70}
          className="inline-block mr-2"
        />
        FlowMate
      </button>
      <Menu.Group>
        {dashboardRoute.map((value, index) => (
          <Menu.Item
            key={index}
            onClick={() => {
              handleMenuClick(value.path);
            }}
            icon={value.icon}
          >
            {value.name}
          </Menu.Item>
        ))}
      </Menu.Group>

      <div className="flex gap-2">
        <button
          className={cn(
            "flex items-center gap-1.5",
            "px-2.5 rounded-lg border border-white/20 bg-white/15",
            "text-white text-sm capitalize",
            "cursor-pointer"
          )}
          onClick={() => {}}
        >
          <BellIcon size={14} />
        </button>
        <button
          className={cn(
            "flex items-center gap-1.5",
            "px-3 py-2 rounded-lg border border-white/20 bg-white/15",
            "text-white text-sm capitalize",
            "cursor-pointer"
          )}
          onClick={() => {}}
        >
          <ArrowLogoutIcon size={14} />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
