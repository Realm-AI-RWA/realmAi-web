"use client";
import Image from "next/image";
import Link from "next/link";

function Hero() {

  return (
    <div className="bg-black_hero_bg pl-[1rem] md:pl-[13rem] pb-[3rem] flex  items-center flex-col md:flex-row">
      <div className="z-10 w-full pt-[9rem] md:pt-0 md:w-[100.625rem] flex flex-col gap-[1.5rem] px-[1rem] md:px-0">
        <div className="flex flex-col font-Bricolage text-white text-[2.5rem] md:text-[4.5rem] font-bold  tracking-[-0.045rem]">
          <h3 className="md:pt-40">AI-Driven Real</h3>
          <h3 className="primary_text">Assets Tokenization</h3>
          <h3>on Solana.</h3>
        </div>
        <p className="text-white text-base font-Inter">
          Integrating artificial intelligence (AI) to tokenize real-world
          assets. By harnessing the synergy between AI and blockchain
          technology, RealmAI transforms traditional asset ownership, liquidity,
          and investment accessibility.
        </p>
        <div className="w-full md:w-[20rem]">
          <Link
          target="__blank"
            href="https://birdeye.so/token/RaiuuHKrphE2jENyANz37mcTquwmwBqdnAiR881aEBZ?chain=solana"
            className="bg-primary w-full 
            flex justify-center items-center py-[0.5rem] px-[1.5rem] rounded-full font-Bricolage text-[1.125rem] text-[#0E1117] font-bold hover:scale-105 transition-all"
          >
            Buy on DEX
          </Link>
        </div>

        <div className="w-full md:w-[20rem]">
          <Link
          target="__blank"
            href="https://birdeye.so/token/RaiuuHKrphE2jENyANz37mcTquwmwBqdnAiR881aEBZ?chain=solana"
            className="border-primary border-[2px] bg-white w-full 
            flex justify-center items-center py-[0.5rem] px-[1.5rem] rounded-full font-Bricolage text-[1.125rem] text-[#0E1117] font-bold hover:scale-105 transition-all"
          >
            Submit Asset
          </Link>
        </div>
      </div>

      <div className="w-full -mt-[8rem] block md:hidden  animate-pulse ">
        <Image
          src="/images/hero_circle.png"
          layout="fill"
          className="image "
          alt="hero"
          title="hero"
        />
      </div>

      <div className="w-full -mt-[8rem] hidden md:block  rotateImage">
        <Image
          src="/images/hero_circle.png"
          layout="fill"
          className="image "
          alt="hero"
          title="hero"
        />
      </div>
    </div>
  );
}

export default Hero;
