import React, { startTransition } from 'react';
import Lottie from 'react-lottie';
import * as startanimation from '../../startanimation.json';
import * as erroranimation from '../../error.json';
import * as sseanimation from '../../sse.json';

const Animation: React.FC<{ blok: any }> = ({ blok }) => {

var animationFilePath = null;
console.log(blok.type);
  switch (blok.type) {
    
    case 'erroranimation':
    animationFilePath = erroranimation;
    break;
    case 'startanimation':
    animationFilePath = startanimation;
    break;
    default:
      null;
  }
 
  console.log(animationFilePath);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationFilePath, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div
      className={`w-screen md:flex justify-end hidden h-full absolute top-14 right-0`}
    >
      <Lottie options={defaultOptions} />
    </div>
  );
};


export default Animation;
