import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between flex-wrap items-start gap-20 max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo Nike" width={150} height={46} />
          </a>

          <p className="text-white-400 sm:max-w-sm font-montserrat text-base mt-6 leading-7">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards.
          </p>
          <div className="flex mt-8 items-center gap-5 ">
            {socialMedia.map((social) => (
              <div
                key={social.alt}
                className="bg-white flex justify-center items-center h-12 w-12 rounded-full "
              >
                <a href="/">
                  <img
                    src={social.src}
                    alt={social.alt}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start gap-2 items-center font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
        <p className="font-montserrat cursor-pointer text-white">Copyright. All rights reserved. </p>
        </div>
        <p className="font-montserrat cursor-pointer text-white">Terms & Conditions</p>
      </div>
    </footer>
  );
}
