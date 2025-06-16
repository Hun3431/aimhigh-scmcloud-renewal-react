import { useLocation, useNavigate } from "react-router-dom";
import ArrowIcon from "../../icons/arrowIcon";

const DocsTitle = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split("/").slice(1);
  const title = path[path.length - 1];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2 text-base text-gray-60">
        {path.map((value, index) =>
          path.length - 1 === index ? (
            <div key={index}>{value}</div>
          ) : (
            <>
              <button
                key={index}
                onClick={() => {
                  navigate(`/${path.slice(0, index + 1).join("/")}`);
                }}
              >
                {value}
              </button>
              <ArrowIcon direction="right" strokeWidth={3} size={14} />
            </>
          )
        )}
      </div>
      <div className="text-2xl font-bold capitalize">{title}</div>
    </div>
  );
};

export default DocsTitle;
