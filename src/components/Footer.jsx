import { footerLinks, socialMedia } from "../constants.js";
import { logo } from "../assets/index.js";
import styles from "../styles.js";

function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} md:flex-row flex-col gap-10 mb-8 w-full`}
      >
        <div className="flex-1 flex flex-col justify-start">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row gap-8 justify-between flex-wrap">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col gap-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4 last:mb-0"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2022 Modern Bank. All Rights Reserved.
        </p>
        <div className="flex flex-row gap-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-[21px] h-[21px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
