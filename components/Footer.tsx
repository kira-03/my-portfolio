import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex gap-4">
          <a href="mailto:guruprasathmaheswaran.07@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="Check out my resume"
              icon={<FaFilePdf />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Guruprasath Maheswaran
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${
                info.id === 1
                  ? "GitHub"
                  : info.id === 2
                  ? "Discord"
                  : info.id === 3
                  ? "LinkedIn"
                  : "LeetCode"
              } profile`}
              className={`w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg border border-black-300 transition-transform duration-300 ease-in-out
                ${info.id === 1 ? "hover:bg-[#333]" : ""}  // GitHub
                ${info.id === 2 ? "hover:bg-[#5865F2]" : ""} // Discord
                ${info.id === 3 ? "hover:bg-[#0077B5]" : ""} // LinkedIn
                ${info.id === 4 ? "hover:bg-[#333]" : ""} // LeetCode
              `}
            >
              <Image
                src={info.img}
                alt="icons"
                width={20}
                height={20}
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
