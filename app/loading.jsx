"use client";
import { useTheme } from "next-themes";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  const {theme} = useTheme()
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <PuffLoader color={theme == "dark" ? "#ff6700" : "#ff7a20"} loading={true} size={24} />
    </div>
  );
};

export default Loading;
