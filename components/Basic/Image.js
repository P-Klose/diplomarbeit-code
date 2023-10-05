import { storyblokEditable } from "@storyblok/react/rsc";

const ImageComponent = ({ blok }) => {
  return <img className="h-full max-h-60" src={blok.image.filename}></img>;
};

export default ImageComponent;
