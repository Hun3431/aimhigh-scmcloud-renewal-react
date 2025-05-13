import { useNavigate } from "react-router-dom";
import { cn } from "cn-func";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div
      className={cn(
        "dark:bg-black dark:text-white",
        "not-dark:bg-white not-dark:text-black",
        "flex flex-col items-center justify-center gap-10",
        "w-full h-dvh "
      )}
    >
      <div className="text-9xl font-semibold">404</div>
      <div className="text-3xl font-bold">Page Not Found</div>
      <div className="rounded-full bg-white">
        <button
          className="bg-indigo-400 px-6 py-4 rounded-full text-white font-semibold hover:opacity-80"
          onClick={handleBackToHome}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
