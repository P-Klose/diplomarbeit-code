import Navbar from "@/components/Navbar";
import { PageProps } from "@/types/interfaces";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC } from "react";
import lottie from 'lottie-web';
import erroranimation from '../../../error.json';

const Error: React.FC<{ blok: any }> = ({ blok }) => {
   
    
      const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: erroranimation, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
      return (
        <div>
         
        </div>
      );
    };

    
    
    export default Error;