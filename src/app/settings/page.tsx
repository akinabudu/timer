"use client";
import Link from "next/link";
import React from "react";
import { atom, useAtom } from "jotai";
import { SettingsForm } from "@/components/Form";

export const AtomTimer = atom<any>({hrs:0,min:0,sec:0});
export default function Settings() {
  const [input1Value, setInput1Value] = React.useState<any>();
  const [input2Value, setInput2Value] = React.useState<any>();
  const [input3Value, setInput3Value] = React.useState<any>();

  const [timed, setTimed] = useAtom(AtomTimer);
  // const [hrs, setHrs] = useAtom(AtomHrs);
  // const [min, setMin] = useAtom(AtomMin);
  // const [sec, setSec] = useAtom(AtomSec);

 

  const handleClick = async () => {
    setTimed({ hrs: parseInt(input1Value,10), min: parseInt(input2Value,10), sec: parseInt(input3Value,10) });
    console.log(timed);
  };
  return (
    // <div className="flex min-h-screen items-center justify-center">
    //   <div className="relative flex flex-col items-center rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
    //     <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    //       Timer
    //     </h4>
    //     <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    //       Set the duration of the timer
    //     </p>
    //     <form onSubmit={handleClick} className="mt-8 mb-2 w-full   ">
    //       <div className="mb-4 flex flex-col md:flex-row gap-6">
    //         <div className="relative h-11 w-full min-w-[200px]">
    //           <input
    //             className=" peer h-full w-fit rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans  font-normal text-white  text-xl outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    //             placeholder=" "
    //             type="text"
    //             value={input1Value}
    //             onChange={(e) => setInput1Value(e.target.value) }
    //           />
    //           <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    //             Hour
    //           </label>
    //         </div>
    //         <div className="relative h-11 w-full min-w-[200px]">
    //           <input
    //             className="peer h-full w-fit rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans font-normal text-white  text-xl outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    //             placeholder=" "
    //             type="text"
    //             value={input2Value}
    //             onChange={(e) => setInput2Value(e.target.value) }
    //           />
    //           <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    //             Minutes
    //           </label>
    //         </div>
    //         <div className="relative h-11 w-full min-w-[200px]">
    //           <input
    //             className="peer h-full w-fit rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans font-normal text-white  text-xl outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    //             placeholder=" "
    //             type="text"
    //             value={input3Value}
    //             onChange={(e) => setInput3Value(e.target.value) }
    //           />
    //           <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    //             Seconds
    //           </label>
    //         </div>
    //       </div>

    //       <button
    //         className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans  font-bold uppercase text-white  text-xl shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //         type="submit"
    //         data-ripple-light="true"
    //       >
    //         Set Time
    //       </button>
    //     </form>
    //     <div className="w-full pt-5 px-4 mb-8 flex justify-between  items-center ">
    //       <div className="flex text-sm text-gray-700 py-1">
    //         Created by:{" "}
    //         <Link
    //           href="https://www.orglobal.com.ng"
    //           className="text-gray-700 font-semibold hover:text-pink-500"
    //           target="_blank"
    //         >
    //           {" "}
    //           Orglobal
    //         </Link>
    //       </div>
    //       <Link
    //         className="text-sm hover:text-pink-500"
    //         href={"/"}
    //         target="_blank"
    //       >
    //         Open Timer Page
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className='flex flex-col justify-center items-center w-full h-screen '>

      <SettingsForm/>
    </div>
  );
}
