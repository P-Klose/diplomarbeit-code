import { storyblokEditable } from "@storyblok/react/rsc";

const ImageComponent = ({ blok }) => {
  if (blok.type == "logo-small") {
    return (
      <img className="mx-10 h-full max-h-10" src={blok.image.filename}></img>
    );
  } else {
    return <img className="h-full max-h-60" src={blok.image.filename}></img>;
  }
};

export default ImageComponent;
