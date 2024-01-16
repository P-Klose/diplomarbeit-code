import { PageProps } from "@/types/interfaces";
import erroranimation from "../../../error.json";
import { FC } from "react";

const Error: FC<PageProps> = async ({ params }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: erroranimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const error_de = "Diese Seite existiert nicht";
  const error_en = "This Page doesn't exist";
  const message = params.lng == "de" ? error_de : error_en;
  return (
    <div className="h-screen w-screen bg-black">
      <h1 className="text-3xl uppercase text-white">Error</h1>
      <p className="text-white">{message}</p>
    </div>
  );
};

export default Error;
