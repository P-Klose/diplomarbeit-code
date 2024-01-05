import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
