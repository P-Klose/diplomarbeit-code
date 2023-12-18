import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Navbar></Navbar>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    <Footer></Footer>
  </main>
);

export default Page;
