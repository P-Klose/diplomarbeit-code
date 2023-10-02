import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

import { FaFileArrowDown } from "react-icons/fa6";

const Branch = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Navbar></Navbar>
    <section className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-20 p-6 md:grid-cols-3">
      <div className="col-span-2 md:mt-16">
        <h1 className="mb-4 text-6xl font-medium uppercase">{blok.headline}</h1>
        <h2 className="text-3xl font-medium uppercase">{blok.subline}</h2>
      </div>
      <div className="md:col-span-2 md:row-start-2">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <button className="mt-8 flex items-center justify-center bg-it-medientechnik bg-opacity-20 px-6 py-4 transition ease-in-out hover:bg-opacity-50 hover:text-neutral-800">
          <FaFileArrowDown className="mr-2"></FaFileArrowDown>
          Download Flyer {blok.headline}
        </button>
        {/* <p>{blok.description}</p> RICHTEXT Resolver */}
      </div>
      <div className="md:col-span-1 md:row-start-2">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/3XKDhT4mfJo?si=OmlPYJQGtqEzluaT&amp;controls=0"
          title="YouTube video player"
        ></iframe>
      </div>
    </section>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    <Footer></Footer>
  </main>
);

export default Branch;
