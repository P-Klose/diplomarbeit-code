import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import { PageComponentProps } from "@/types/interfaces";

const Page: React.FC<{ blok: PageComponentProps }> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok._editable)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
