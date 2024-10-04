import { useState } from "react";
import Avatar from "../assets/Avatar.svg";
import Logo from "../assets/Content.svg";

export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <div className="z-20 bg-white/50 backdrop-blur-md absolute top-0 right-0 text-gray-500 font-semibold flex md:flex-row border-b py-3 transition-all px-6 md:px-12 lg:px-24 items-center justify-between w-full h-[60px]">
      <div className="flex-col flex md:flex-row justify-between justify-between">
        <div>
          <img className="cursor-pointer" src={Logo} />
        </div>
      </div>
      <div className="md:hidden block absolute right-8 top-4 z-10" onClick={()=>{setOpen(!open)}}>{open?<Cross/>:<Burger />}</div>
      <div className="w-full h-full md:block hidden">
      <div className={"h-screen md:h-full flex md:flex-row flex-col-reverse items-center w-full justify-center md:justify-between"}>
      
      <div className="md:mt-0 mt-4 flex flex-col md:flex-row ml-8 md:w-full md:3/5 lg:w-2/5 justify-between">
        <div className="cursor-pointer flex flex-row items-center hover:text-gray-800 hover:font-bold transition-all ">
          Home
        </div>
        <div className="cursor-pointer  hover:text-gray-800 hover:font-bold transition-all flex flex-row items-center">
          Products <Down />
        </div>
        <div className="cursor-pointer  hover:text-gray-800 hover:font-bold transition-all flex flex-row items-center">
          Resource <Down />
        </div>
        <div className="cursor-pointer  hover:text-gray-800 hover:font-bold transition-all flex flex-row items-center">
          Pricing
        </div>
      </div>

      <div className="w-full flex flex-col items-center md:items-end">
        <img className="w-8 h-8" src={Avatar} />
      </div>
    </div>

      </div>
      {open && <div className={"absolute w-3/5 top-0 border right-0 bg-white backdrop-blur-md h-screen md:h-full flex md:flex-row flex-col-reverse items-center w-full justify-end pt-24 md:justify-between"}>
      
        <div className="md:mt-0 mt-4 flex flex-col md:flex-row ml-8 md:w-full md:3/5 lg:w-2/5 justify-between">
          <div className="cursor-pointer flex flex-row items-center hover:text-gray-800 hover:font-bold transition-all ">
            Home
          </div>
          <div className="cursor-pointer  hover:text-gray-800 hover:font-bold transition-all flex flex-row items-center">
            Products <Down />
          </div>
          <div className="cursor-pointer  hover:text-gray-800 hover:font-bold transition-all flex flex-row items-center">
            Resource <Down />
          </div>
          <div className="cursor-pointer  hover:text-gray-800 hover:font-bold transition-all flex flex-row items-center">
            Pricing
          </div>
        </div>

        <div className="w-full flex flex-col items-center md:items-end">
          <img className="w-8 h-8" src={Avatar} />
        </div>
      </div>}
    </div>
  );
}


function Burger(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  
}

function Cross(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
  
}

function Down() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="ml-2 size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
