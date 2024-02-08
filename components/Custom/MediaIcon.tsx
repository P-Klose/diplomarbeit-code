import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaSpotify,
  FaInstagram,
  FaTiktok,
  FaNewspaper,
  FaYoutube,
  FaAngleRight,
  FaAngleLeft,
  FaPhone,
  FaBoxArchive,
  FaMapLocation,
  FaAward,
  FaBell,
  FaHashtag,
} from "react-icons/fa6";
import { MediaIconProps } from "@/types/interfaces";

const MediaIcon: React.FC<MediaIconProps> = ({ iconName }) => {
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
    case "arrow-right":
      return <FaAngleRight />;
    case "arrow-left":
      return <FaAngleLeft />;
    case "phone":
      return <FaPhone />;
    case "box":
      return <FaBoxArchive />;
    case "map":
      return <FaMapLocation />;
    case "award":
      return <FaAward />;
    case "bell":
      return <FaBell />;
    case "hashtag":
      return <FaHashtag />;

    default:
      return null;
  }
};

export default MediaIcon;
