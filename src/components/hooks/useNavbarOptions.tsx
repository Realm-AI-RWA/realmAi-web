import { useRouter } from "next/navigation";



const useNavbarOptions = ()=>{
    const router = useRouter();
    return   [
        {
          title: "TOKEN",
          link: "/#token",
        },
        {
          title: "TECHNOLOGY",
          link: "/#technology",
        },
        {
          title: "WHITEPAPER",
          link: "/#whitepaper",
        },
        {
          title: "ROADMAP",
          link: "/#roadmap",
        },
        
        {
          title: "ASSET PORTAL",
          link: "/#portal",
        },
      ];
}

export default useNavbarOptions;