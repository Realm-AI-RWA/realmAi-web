import { useRouter } from "next/navigation";



const useNavbarOptions = ()=>{
    const router = useRouter();
    return   [
        {
          title: "TOKEN",
          link: "/#token",
        },
        {
          title: "TECHNLOGY",
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
          title: "CONTACT US",
          link: "/#contact",
        },
      ];
}

export default useNavbarOptions;