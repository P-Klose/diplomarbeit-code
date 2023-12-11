"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { motion, AnimationProps } from "framer-motion";

const AnimateLogo = () => {
  return (
    <>
      <div></div>
    </>
  );
};
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto flex h-screen w-full max-w-screen-2xl flex-col items-center justify-center">
        <h2 className="text-4xl uppercase md:text-6xl">
          Something went wrong!
        </h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}
