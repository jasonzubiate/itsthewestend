import Link from "next/link";
import { HiMiniArrowRight, HiMiniArrowUpRight } from "react-icons/hi2";

function Footer() {
  return (
    <footer
      id="footer"
      className="min-h-[100dvh] bg-trace-ash text-bridal-health px-12 pt-[128px] pb-8 flex justify-between flex-col"
    >
      <div className="flex w-full justify-between">
        <div className="flex gap-12">
          <div className="flex flex-col gap-4 text-2xl">
            <p className="text-swiss-coffee">Sitemap</p>
            <nav>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-2 items-center">
                  <Link href="#home">Home</Link>
                  <HiMiniArrowRight />
                </li>
                <li className="flex gap-2 items-center">
                  <Link href="#about">About</Link>
                  <HiMiniArrowRight />
                </li>
                <li className="flex gap-2 items-center">
                  <Link href="#Music">Music</Link>
                  <HiMiniArrowRight />
                </li>
                <li className="flex gap-2 items-center">
                  <Link href="#sets">Sets</Link>
                  <HiMiniArrowRight />
                </li>
                <li className="flex gap-2 items-center">
                  <Link href="#events">Events</Link>
                  <HiMiniArrowRight />
                </li>
                <li className="flex gap-2 items-center">
                  <Link href="#awards">Awards</Link>
                  <HiMiniArrowRight />
                </li>
                <li className="flex gap-2 items-center">
                  <Link href="#shop">Shop</Link>
                  <HiMiniArrowRight />
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4 text-2xl">
            <p className="text-swiss-coffee">Connect</p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center">
                <a href="https://www.instagram.com/itsthewestend/?">
                  Instagram
                </a>
                <HiMiniArrowUpRight />
              </li>
              <li className="flex gap-2 items-center">
                <a href="https://www.tiktok.com/@itsthewestend" target="_blank">
                  TikTok
                </a>
                <HiMiniArrowUpRight />
              </li>
              <li className="flex gap-2 items-center">
                <a href="http://twitter.com/itsthewestend" target="_blank">
                  X
                </a>
                <HiMiniArrowUpRight />
              </li>
              <li className="flex gap-2 items-center">
                <a
                  href="https://www.youtube.com/@itsthewestend"
                  target="_blank"
                >
                  Youtube
                </a>
                <HiMiniArrowUpRight />
              </li>
              <li className="flex gap-2 items-center">
                <a href="http://facebook.com/itsthewestend" target="_blank">
                  Facebook
                </a>
                <HiMiniArrowUpRight />
              </li>
              <li className="flex gap-2 items-center">
                <a
                  href="https://open.spotify.com/artist/4epc3Bd0DOBA0kDywkRAsu?si=zB9WbHfkTL-p_jDNH5mokg"
                  target="_blank"
                >
                  Spotify
                </a>
                <HiMiniArrowUpRight />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-2xl">
            <p className="text-swiss-coffee">Platforms</p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center">
                <a href="https://traceamounts.nyc/" target="_blank">
                  Trace Amounts
                </a>
                <HiMiniArrowUpRight />
              </li>
              <li className="flex gap-2 items-center">
                <a href="https://kick-bass.com/" target="_blank">
                  Kick & Bass
                </a>
                <HiMiniArrowUpRight />
              </li>
              <li className="flex gap-2 items-center">
                <a
                  href="https://www.beatport.com/artist/westend/576028"
                  target="_blank"
                >
                  Beatport
                </a>
                <HiMiniArrowUpRight />
              </li>
            </ul>
          </div>
        </div>
        <Link href="#home" className="text-2xl">
          Back To Top
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        <label htmlFor="westend" className="text-[24.5dvw] leading-[80%]">
          Westend
        </label>
        <div className="w-full border border-b-bridal-health"></div>
        <div className="flex w-full justify-between font-light tracking-wider">
          <p>New York – New York</p>
          <div className="flex gap-16">
            <a href="mailto: itsthewestend@gmail.com">
              itsthewestend@gmail.com
            </a>
            <a
              href="https://www.trackstack.app/inbox/TRACEAMOUNTS"
              target="_blank"
            >
              Demos
            </a>
            <Link href="/imprint">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;