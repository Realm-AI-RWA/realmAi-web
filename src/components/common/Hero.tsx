"use client";
import Image from "next/image";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout>(null!);
  const [messageText, setMessageText] = useState("");


  function countDown() {
    let targetDate = new Date('2024-06-14T00:00:00.000Z');
     timerRef.current = setInterval(() => {
      let difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) {
        clearInterval(timerRef.current);
        setMessageText("Learn more");
      } else {
        let days = Math.floor(difference / (24 * 60 * 60 * 1000));
        let hours = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
        let seconds = Math.floor((difference % 60 * 1000) / 1000);
        setMessageText(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
      }
    }, 1000);
  }

  useEffect(() => {
    countDown()

    return () => clearInterval(timerRef.current);
  }, []);

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
          <Button
            onClick={() => router.push("/#technology")}
            title={messageText}
          />
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
