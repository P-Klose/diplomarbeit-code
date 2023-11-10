import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaSpotify,
  FaInstagram,
  FaTiktok,
  FaNewspaper,
  FaYoutube,
} from "react-icons/fa6";

const MediaIcon = ({ iconName }) => {
  switch (iconName) {
    case "facebook":
      return <FaFacebook />;
    case "linkedin":
      return <FaLinkedin />;
    case "spotify":
      return <FaSpotify />;
    case "instagram":
      return <FaInstagram />;
    case "tiktok":
      return <FaTiktok />;
    case "news":
      return <FaNewspaper />;
    case "youtube":
      return <FaYoutube />;
    default:
      return null;
  }
};

export default MediaIcon;
