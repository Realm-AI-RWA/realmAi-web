"use client"

import React, { useCallback, useState } from "react";
import SecondaryBtn from "../ui/secondaryBtn";
import { useMediaQuery } from "react-responsive";

function TechnologySection() {
  const isMobile = useMediaQuery({ maxWidth: "800px" });
  const [options, setOptions] = useState([
    {
      title: "AI-Powered Asset Identification",
      description:
        "RealmAI employs advanced AI algorithms to identify and evaluate diverse real-world assets suitable for tokenization. From real estate properties to fine art collections, the platform analyzes asset attributes, market data, and historical performance to assess tokenization feasibility.",
    },
    {
      title: "Automated Tokenization Process",
      description:
        "RealmAI automates the asset tokenization process through Ethereum smart contracts. Leveraging AI-driven smart contracts, the platform enables seamless fractionalization of assets and issuance of asset-backed tokens (security tokens). This automation streamlines the tokenization journey while ensuring compliance and transparency.",
    },
    {
      title: "Risk Assessment and Compliance:",
      description:
        "The platform utilizes AI-driven risk assessment models to evaluate the risk profiles of asset-backed tokens and ensure compliance with regulatory standards. RealmAI conducts thorough due diligence, verifies asset ownership, and implements robust Know Your Customer (KYC) andAnti-Money Laundering (AML) procedures.",
    },

    {
      title: "Investor Matching and Profiling",
      description:
        "RealmAI employs AI-powered investor profilingalgorithms to match investors with suitable asset-backed tokens based on theirrisk tolerance, investment objectives, and financial preferences. Through personalized recommendations, investors can access tailored investment opportunities aligned with their goals.",
    },
    {
      title: "Decentralized Governance and Transparency",
      description:
        "Operating on Ethereum's decentralized network, RealmAI ensures transparent governance and community participation in platform governance. Token holders have voting rights to influence platform upgrades, asset tokenization proposals, and governance policies, fostering a collaborative ecosystem.",
    },
    {
      title: "Real-Time Asset Performance Monitoring",
      description:
        "RealmAI provides comprehensive monitoring and analytics tools to track asset performance, token valuation, and market trends in real-time. AI algorithms analyze data streams, user feedback, and market indicators to generate actionable insights, empowering investors to make informed decisions.",
    },
    {
      title: "Secondary Market Trading",
      description:
        "RealmAI provides comprehensive monitoring and analytics tools to track asset performance, token valuation, and market trends in real-time. AI algorithms analyze data streams, user feedback, and market indicators to generate actionable insights, empowering investors to make informed decisions.",
    },
  ]);

  const withoutLastOption = useCallback(() => {
    const o = options;
   options.pop();
    return o;
  }, [options,isMobile]);
  return (
    <div
      id="technology"
      className="flex bg-[#020301] px-[1rem] md:px-[13rem] gap-[3.5rem] py-[5rem] items-center flex-col bg-technology_bg bg-center bg-no-repeat bg-cover"
    >
      <div className="flex justify-center items-center w-full">
        <SecondaryBtn title="Technology" />
      </div>

      <div className="flex flex-col gap-[1.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] place-items-center">
          {(isMobile?options:withoutLastOption()).map((option, index) => (
            <div
              className={`w-full flex flex-col gap-[1rem] md:gap-[2rem] rounded-[1rem] border-[1px] border-primary p-[1rem] min-h-[15rem] md:min-h-[30rem] 
            `}
              key={`options-${index}`}
            >
              <h4 className="text-white text-[1.5rem] font-bold font-Bricolage min-h-[6rem]">
                {option.title}
              </h4>
              <p className="font-Inter text-base text-white">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div className="flex justify-center items-center">
            <div
              className={`w-[33.33%] flex flex-col gap-[1rem] md:gap-[2rem] rounded-[1rem] border-[1px] border-primary p-[1rem] min-h-[15rem] md:min-h-[30rem] 
          `}
            >
              <h4 className="text-white text-[1.5rem] font-bold font-Bricolage min-h-[6rem]">
              Secondary Market Trading
              </h4>
              <p className="font-Inter text-base text-white">
              RealmAI provides comprehensive monitoring and analytics tools to track asset performance, token valuation, and market trends in real-time. AI algorithms analyze data streams, user feedback, and market indicators to generate actionable insights, empowering investors to make informed decisions.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TechnologySection;
