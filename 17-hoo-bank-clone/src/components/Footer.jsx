import React from "react";
import { logo } from "../assets";
import styles from "../style";
import { socialMedia, footerLinks } from "../constants";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <section
      className={`${styles.marginY} ${styles.flexCenter} ${styles.paddingY} flex-col`}
    >
      <div className={` flex flex-col mb-8 w-full ${styles.flexStart} `}>
        <div className="flex flex-col flex-1 justify-start mr-10">
          <img src={logo} alt="" />
          <p className={`${styles.paragraph} pl-4 mt-6 w-[333px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div
          className={`flex-[1.5] w-full flex flex-row flex-wrap justify-between mt-10`}
        >
          {footerLinks.map((footerLink) => {
            return (
              <div className="flex flex-col my-4 min-w-[150px]">
                <h3 className="text-white text-[18px] font-poppins font-medium">
                  {footerLink.title}
                </h3>
                <ul className="list-none">
                  {footerLink.links.map((link, index) => (
                    <li className="text-gray-400 cursor-pointer hover:text-teal-500  mt-2">
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <footer className="w-full flex justify-between items-center md:flex-row flex-col mt-6 pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className={`s${styles.paragraph}`}>
            {" "}
            Copyright &copy; {year} HooBank. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social) => {
              return (
                <img
                  src={social.icon}
                  alt=""
                  onClick={() => window.open(social.link)}
                  className="cursor-pointer px-3 object-contain"
                />
              );
            })}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
