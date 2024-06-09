"use client"

import Image from "next/image";
import SecondaryBtn from "../ui/secondaryBtn";
import { useMediaQuery } from "react-responsive";

function RoadMapSection() {
  const isMobile = useMediaQuery({ maxWidth: "800px" });
  return (
    <div id="roadmap" className="bg-[#020301] pt-[5rem] px-[1rem] md:px-[13rem] ">
      <div className="flex justify-center items-center">
        <SecondaryBtn title="Roadmap" />
      </div>
      <div className="bg-map_bg bg-center bg-cover bg-no-repeat mt-16">
        <Image
          src={`/images/${isMobile ? "road_map_mobile" : "road_maps"}.png`}
          alt="roadmap"
          title="roadmap"
          layout="fill"
          className="image"
        />
      </div>
    </div>
    
  );
}

export default RoadMapSection;
