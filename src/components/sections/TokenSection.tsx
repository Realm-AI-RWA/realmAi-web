import React from "react";
import SecondaryBtn from "../ui/secondaryBtn";
import Image from "next/image";

function TokenSection() {
  const options = [
    {
      option: "Address",
      value: "0xUaA8A7D1fB4cDe81C59C25b95b",
    },
    {
      option: "Network",
      value: "ETH",
    },
    {
      option: "Holders",
      value: "1800+",
    },
    {
      option: "Total/Max Supply:",
      value: "100,000,000",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row bg-[#020301] px-[1rem] md:px-[13rem] md:gap-2 py-[5rem] items-center gap-[2rem]">
      <div className="flex flex-col flex-1 gap-[2rem]">
        <SecondaryBtn id="token" title="Token" />
        <h3  className="font-Bricolage text-[2.75rem] font-bold text-white">
          REMAI Token Info
        </h3>
        <p   className="text-white font-Inter text-[1.125rem] tracking-[-0.01125rem] w-full md:w-4/5">
          RealmAI aims to revolutionize the financial industry by democratizing
          access to real-world assets, enhancing liquidity, and fostering
          financial inclusion through AI-driven asset tokenization on the
          Solana blockchain. By harnessing the power oftechnology and
          innovation, RealmAI seeks to create a more equitable, transparent, and
          sustainable financial ecosystem for investors worldwide
        </p>
        {options.map((option, index) => (
          <div key={index} className="flex items-center flex-wrap">
            <p className="text-primary font-Inter text-[1.125rem] tracking-[-0.01125rem]">
             {option.option}:
            </p>
            <p className="text-white font-Inter text-[1.125rem] tracking-[-0.01125rem] pl-[0.1rem]">
            {" "} {option.value}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full md:w-[26.6875rem] rounded-[0.75rem] bg-token_header_bg h-fit">
        <div className="flex flex-col gap-[1.5rem] py-[1.5rem] px-[1.5rem]">
          <h4 className="text-white text-center font-Bricolage text-[1.5rem] font-bold">
            Token distribution
          </h4>
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex justify-between items-center">
              <p className="text-[#8149FE] font-Inter text-[1.125rem] tracing-[-0.01125rem] ">
                65% Public sale
              </p>
              <p className="text-[#85B86F] font-Inter text-[1.125rem] tracing-[-0.01125rem] ">
                7% Partnership
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#C3832B] font-Inter text-[1.125rem] tracing-[-0.01125rem] ">
                10% Liquidity
              </p>
              <p className="text-[#C3B663] font-Inter text-[1.125rem] tracing-[-0.01125rem] ">
                5% CEX
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#2EC1EB] font-Inter text-[1.125rem] tracing-[-0.01125rem] ">
                9% Marketing
              </p>
              <p className="text-[#21BBBB] font-Inter text-[1.125rem] tracing-[-0.01125rem] ">
                4% Team
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-black_hero_bg bg-center bg-no-repeat bg-cover">
          <Image
            src="/images/ellipse.png"
            width={300}
            height={300}
            alt="ellipse"
            title="ellipse"
          />
        </div>
      </div>
    </div>
  );
}

export default TokenSection;
