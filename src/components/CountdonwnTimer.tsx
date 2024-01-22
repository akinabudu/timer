"use client";
import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamps } from "./CountdownTimerUtils";
import dayjs from "dayjs";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  // days: "20"
};

const CountdownTimer = ({ CountdownTimestampMs }: any) => {
  const [remaininTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTimeUntilMsTimestamps(CountdownTimestampMs));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [CountdownTimestampMs]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-white w-full gap-3 md:gap-10 p-20">
      {/* <div className="uppercase font-semibold">countdown</div> */}
      {/* <div className="grid grid-cols-4 p-4 gap-5 w-full justify-between"> */}
      {/* <div className="flex flex-col items-center justify-around bg-[#585858]/40 rounded-lg px-4 md:px-8 py-2 md:py-3">
                <div className="text-lg md:text-xl font-bold">{remaininTime.days}</div>
                <span className="text-[.7rem]">days</span>
              </div> */}
      {remaininTime.hours === "0"  ? null  : (
        <>
          <div className="flex flex-col items-center justify-around  px-4 md:px-8 py-2 md:py-3 w-[45%]">
            <div className={`${remaininTime.hours === "0" ? "text-[30vw]" : "text-[16vw]"} font-bold`}>{remaininTime.hours}</div>
            {/* <span className="text-[.7rem]">hours</span> */}
          </div>
          <div className="text-5xl font-bold">:</div>
        </>
      )}
      <div className="flex flex-col items-center justify-around  px-4 md:px-8 py-2 md:py-3 w-[45%]">
        <div className={`${remaininTime.hours === "0" ? "text-[30vw]" : "text-[16vw]"} font-bold`}>{remaininTime.minutes}</div>
        {/* <span className="text-[.7rem]">minutes</span> */}
      </div>
      <div className="text-5xl font-bold">:</div>
      <div className="flex flex-col items-center justify-around  px-4 md:px-8 py-2 md:py-3 w-[45%]">
        <div className={`${remaininTime.hours === "0" ? "text-[30vw]" : "text-[16vw]"} font-bold`}>{remaininTime.seconds}</div>
        {/* <span className="text-[.7rem]">seconds</span> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default CountdownTimer;
