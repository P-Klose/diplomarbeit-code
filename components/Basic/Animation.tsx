import React, { startTransition } from "react";
import Lottie from "react-lottie";
import * as erroranimation from "../../error.json";

const Animation: React.FC<{ blok: any }> = ({ blok }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: erroranimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={`w-screen`}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Animation;
