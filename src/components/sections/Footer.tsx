"use client"

import React from "react";
import Logo from "../common/Logo";
import Button from "../ui/button";
import Link from "next/link";
import useNavbarOptions from "../hooks/useNavbarOptions";

function Footer() {
  const navbarOptions = useNavbarOptions();
  return (
    <div className="flex flex-col gap-[2.5rem] pt-[5rem] bg-[#020301] px-[1rem] md:px-0 ">
      <div className="flex flex-col justify-center items-center">
        <Logo width={90} height={90} />
        <p className="font-Inter text-[1.125rem] text-white mt-[0.75rem]">
          Join our newsletter to stay up to date on features and releases
        </p>
        <form className="relative mt-[2rem] w-full md:w-fit">
          <input
            type="text"
            className="w-full md:w-[35.437rem] pt-0 pr-[0.5rem] pb-0 pl-[1.5rem] bg-white h-[3.5rem] flex items-center rounded-[3rem]"
          />
          <div className="absolute h-[2.5rem] right-2 top-[10%] w-2/5 md:w-1/5">
            <Button title="Subscribe" />
          </div>
        </form>

        <div className="mt-[2.75rem] items-center gap-[1rem] md:gap-[3rem] grid grid-cols-3 place-items-center md:flex">
          {navbarOptions.map((option, index) => (
            <Link
              className="text-white text-[0.875rem] font-space"
              key={`navbar_link_${index}`}
              href={option.link}
            >
              {option.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="py-[2.75rem] flex justify-between items-center border-t-[1px] border-t-[#2B3035] px-[1rem]  md:px-[13rem] gap-[2rem]">
        <p className="font-Inter text-[0.875rem] text-white">©2024 Realm Laps </p>

        <div className="flex items-center gap-[0.6rem]  md:gap-[3.5rem]">
          {/* <Link href="" className="font-Space text-[0.875rem] text-white">
            Privacy Policy
          </Link> */}
          <Link href="" className="font-Inter text-[0.875rem] text-white">
          Made with 🩷 on Solana
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
