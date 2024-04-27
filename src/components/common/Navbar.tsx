"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import { GiCancel } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import useNavbarOptions from "../hooks/useNavbarOptions";

function Navbar() {
  const [showSidebar, setShowHidebar] = useState(false);
  const options = useNavbarOptions();

  const socials = [
    {
      image: "x.png",
      link: "",
    },
    {
      image: "telegram.png",
      link: "",
    },
  ];
  return (
    <>
      <div className="fixed top-8 bg-navbar_bg w-[90%] md:w-[68.75rem] py-[1.375rem] px-[1rem] md:px-[3.5rem] rounded-[5rem] flex justify-between items-center z-20 left-0 right-0 mx-auto ">
        <Logo width={100} height={100} />
        <div className=" items-center gap-[3rem] hidden md:flex">
          {options.map((option, index) => (
            <Link
              className="text-white text-[0.875rem] font-space"
              key={`navbar_link_${index}`}
              href={option.link}
            >
              {option.title}
            </Link>
          ))}
        </div>

        <div className="flex gap-[2rem] items-center">
          {socials.map((social, index) => (
            <Link href={social.link} key={`social_link_${index}`}>
              <Image
                src={`/images/socials/${social.image}`}
                alt="social"
                title="social"
                width={20}
                height={20}

              />
            </Link>
          ))}
          <Image
            src="/images/hamburger.png"
            width={30}
            onClick={()=> setShowHidebar(true)}
            height={30}
            className="block md:hidden"
            alt="menu"
            title="menu"
          />
        </div>
      </div>

      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showSidebar ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            exit={{ opacity: 0 }}
            className="fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#00000077] flex justify-end gap-[4rem]"
          >
            <motion.div
            initial={{ x: 300 }} 
            animate={{ x: showSidebar ? 0 : 300 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }} 
            exit={{ x:300}}
            className="w-[60%] h-full bg-[#000] flex flex-col p-8">
              <div className="flex justify-between items-center">
                <Logo width={100} height={100} />
                <div onClick={()=>setShowHidebar(false)}>
                  <GiCancel color="#F8A11C" size={30} />
                </div>
              </div>

              <div className=" items-center gap-[3rem] flex flex-col mt-[4rem]">
                {options.map((option, index) => (
                  <Link
                    className="text-white text-[0.875rem] font-space"
                    key={`navbar_link_${index}`}
                    href={option.link}
                    onClick={()=> setShowHidebar(false)}
                  >
                    {option.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
