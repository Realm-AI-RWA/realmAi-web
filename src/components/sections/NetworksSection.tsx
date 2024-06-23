//@ts-nocheck
function NetworksSection() {
  const options = ["birdeye.png", "gecko.png", "raydium.png", "jupiter.png"];
  return (
    <>
      <div className=" items-center px-[1rem] md:px-[10rem] bg-[#020301] py-[3rem] justify-between hidden md:flex">
        {options.map((option, index) => (
          <img
            className="flex-1 h-[3.49513rem] w-[3rem] object-contain"
            src={`/images/networks/${option}`}
            key={`network_${index}`}
          />
        ))}
      </div>

      <div className="flex md:hidden items-center px-[1rem] md:px-[10rem] bg-[#020301] max-w-full">
        <marquee  behavior="scrolling">
          <div className="flex items-center px-[1rem] md:px-[10rem] bg-[#020301] justify-between gap-[4rem]  max-w-full">
            {options.map((option, index) => (
              <img
                className="flex-1"
                src={`/images/networks/${option}`}
                key={`network_${index}`}
              />
            ))}
          </div>
        </marquee>
      </div>
    </>
  );
}

export default NetworksSection;
