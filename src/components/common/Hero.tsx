import Image from "next/image";
import Button from "../ui/button";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="bg-black_hero_bg pl-[1rem] md:pl-[13rem] pb-[3rem] flex  items-center flex-col md:flex-row">
      <div className="z-10 w-full pt-[9rem] md:pt-0 md:w-[100.625rem] flex flex-col gap-[1.5rem] px-[1rem] md:px-0">
        <div className="flex flex-col font-Bricolage text-white text-[2.5rem] md:text-[4.5rem] font-[800] tracking-[-0.045rem]">
        <h3 className="">
          AI-Driven Real
        </h3>
        <h3 className="primary_text">Assets Tokenization</h3>
        <h3>on Ethereum.</h3>
        </div>
        <p className="text-white text-base font-Inter">
          Integrating artificial intelligence (AI) to tokenize real-world
          assets. By harnessing the synergy between AI and blockchain
          technology, RealmAI transforms traditional asset ownership, liquidity,
          and investment accessibility.
        </p>
        <div className="w-full md:w-[10rem]">
          <Button title="Learn more" />
        </div>
      </div>

      <div className="w-full -mt-[8rem]">
        <Image
          src="/images/hero_circle.png"
          layout="fill"
          className="image"
          alt="hero"
          title="hero"
        />
      </div>
    </div>
  );
}

export default Hero;