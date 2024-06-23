//@ts-nocheck
"use client"
function NetworksSection() {
  const options = [
    {
      image: "birdeye.png",
      link: "https://birdeye.so/token/RaiuuHKrphE2jENyANz37mcTquwmwBqdnAiR881aEBZ?chain=solana",
    },
    { image: "gecko.png", link: "https://www.geckoterminal.com/solana/pools/E2h4p1YBLxDLHMVaRudoJGjmpBpvZBJ498J41YH442ea?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults" },
    { image: "raydium.png", link: "https://raydium.io/swap/?inputMint=sol&outputMint=RaiuuHKrphE2jENyANz37mcTquwmwBqdnAiR881aEBZ" },
    {
      image: "jupiter.png",
      link: "https://jup.ag/swap/USDC-RaiuuHKrphE2jENyANz37mcTquwmwBqdnAiR881aEBZ",
    },
    {
      image: "dexscanner.png",
      link: "https://dexscreener.com/solana/e2h4p1yblxdlhmvarudojgjmpbpvzbj498j41yh442ea",
    },
  ];
  return (
    <>
      <div className=" items-center px-[1rem] md:px-[6rem] bg-[#020301] py-[3rem] justify-between hidden md:flex">
        {options.map((option, index) => (
          <img
          onClick={()=>{
            window.open(option.link, "__blank")
          }}
            className="cursor-pointer flex-1 h-[3.49513rem] w-[3rem] object-contain"
            src={`/images/networks/${option.image}`}
            key={`network_${index}`}
          />
        ))}
      </div>

      <div className="flex md:hidden items-center px-[1rem] md:px-[10rem] bg-[#020301] max-w-full">
        <marquee behavior="scrolling">
          <div className="flex items-center px-[1rem] md:px-[10rem] bg-[#020301] justify-between gap-[4rem]  max-w-full">
            {options.map((option, index) => (
              <img
              onClick={()=>{
                window.open(option.link, "__blank")
              }}
                className="flex-1 cursor-pointer"
                src={`/images/networks/${option.image}`}
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
