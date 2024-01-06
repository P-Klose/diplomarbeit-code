import React, { startTransition } from "react";
import Lottie from "react-lottie";
import * as erroranimation from "../../error.json";

const Animation: React.FC<{ blok: any }> = ({ blok }) => {
  var animationFilePath = null;
  // console.log(blok.type);
  // switch (blok.type) {
  //   case "erroranimation":
  //     animationFilePath = erroranimation;
  //     break;
  //   case "startanimation":
  //     animationFilePath = startanimation;
  //     break;
  //   default:
  //     null;
  // }

  // console.log(animationFilePath);

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
