import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-dvh flex flex-row gap-4 items-center justify-center text-2xl font-bold">
      <button
        className="w-52 aspect-square rounded-4xl bg-blue-200"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
      <button
        className="w-52 aspect-square rounded-4xl bg-gray-200"
        onClick={() => navigate("/docs")}
      >
        Document
      </button>
    </div>
  );
};

export default MainPage;
