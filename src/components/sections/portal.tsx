import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import Link from "next/link";

function WallSection() {
  return (
    <div id="whitepaper" className="bg-[#020301] flex flex-col py-[6rem] pb-[5rem]mx-[3rem] ">
      <div className="w-[95%]  md:w-[50.5rem] mx-auto border-[rgba(252, 201, 13, 0.17)] border-[1px] border-primary rounded-[2rem]  bg-wall_bg backdrop-blur-[50%] flex justify-between pt-[8rem] pl-[0.5rem] md:pl-[6rem] items-end md:items-start flex-col md:flex-row">
        <div className="flex flex-col gap-[1.5rem] pb-[4rem]">
          <h4 className="text-white font-Bricolage text-[2rem] font-bold">
            Whitepaper
          </h4>
          <p className="text-white font-Inter text-base w-2/3">
            Learn more about RealmAI project plans, team, market and fit.
          </p>
          <Link href="https://bafybeiell5yl6b7lztq4n2sc6abilvtxcsdtleqftq6nkvvcpcotmpgqyq.ipfs.w3s.link/Realm%20Ai%20Whitepaper%20(2).pdf" target="__blank" className="w-[15rem]">
            <Button title="View Whitepaper" />
          </Link>
        </div>

        <div className="w-full flex justify-center items-center">
          <Image
            src="/images/wall.png"
            layout="fill"
            className="image"
            alt="wall"
            title="wall"
          />
        </div>
      </div>
    </div>
    
  );
}

export default WallSection;
