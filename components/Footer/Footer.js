import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";

const Footer = ({ blok }) => {
  return (
    <footer className="bg-gray-100 place-items-cente mt-4">
      <div className="max-w-7xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto py-8">
        {blok.columns.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        {/* <div className="col-span-1 flex flex-col gap-4 p-4">
          <h3 className="font-bold text-xl">HTBLA Leonding</h3>
          <hr></hr>
          <p>Limesstraße 12-14A 4060 Leonding</p>
          <p>(07213) 67 33 68 - 0</p>
          <p>office@htl-leonding.ac.at</p>
          <p>Schulkennzahl: 410427</p>
          <p>Online Broschüre</p>
        </div>
        <div className="col-span-1 flex flex-col gap-4 p-4">
          <h3 className="font-bold text-xl">Bildungsangebot</h3>
          <hr></hr>
          <Link href="#">Informatik - SSE</Link>
          <Link href="#">Informatik - CSI</Link>
          <Link href="#">Informatik - DDP</Link>
          <Link href="#">IT-Medientechnik</Link>
          <Link href="#">Elektronik und technische Informatik</Link>
          <Link href="#">Biomedizin- und Gesundheitstechnik</Link>
          <Link href="#">Elektronik Fachschule</Link>
          <Link href="#">Kolleg für Berufstätige Informatik</Link>
          <Link href="#">Kolleg für Berufstätige System-/Medientechnik</Link>
        </div>
        <div className="col-span-1 flex flex-col gap-4 p-4">
          <h3 className="font-bold text-xl">Kontakt</h3>
          <hr></hr>
          <Link href="#">Kontaktdaten</Link>
          <Link href="#">LehrerInnen</Link>
          <Link href="#">Datenschutz</Link>
          <Link href="#">Impressum</Link>
        </div>
        <div className="col-span-1 flex flex-col gap-4 p-4">
          <h3 className="font-bold text-xl">Socials</h3>
          <hr></hr>
          <Link href="/news">News</Link>
          <Link href="https://www.youtube.com/c/HTBLALeonding">YouTube</Link>
          <Link href="https://open.spotify.com/show/5sMNvtMs1kXzwAVFKwTIzJ">
            Spotify
          </Link>
          <Link href="https://www.facebook.com/htlleonding">Facebook</Link>
          <Link href="https://www.instagram.com/htlleonding">Instagram</Link>
          <Link href="https://www.tiktok.com/@htlleonding">TikTok</Link>
          <Link href="https://www.linkedin.com/company/htl-leonding">
            LinkedIn
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
