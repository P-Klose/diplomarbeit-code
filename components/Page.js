import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Navbar from "./Navbar";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Navbar></Navbar>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
