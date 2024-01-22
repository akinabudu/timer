"use client";
import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamps } from "./CountdownTimerUtils";

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
      updateRemainingTime(CountdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [CountdownTimestampMs]);

  function updateRemainingTime(countdown: any) {
    setRemainingTime(getRemainingTimeUntilMsTimestamps(countdown));
  }
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-white w-full gap-3 md:gap-10 p-20 h-screen">
      {remaininTime.hours === "0" ? null : (
        <>
          <div className="flex flex-col items-center justify-around  px-4 md:px-8 py-2 md:py-3 w-[45%]">
            <div
              className={`${
                remaininTime.hours === "0" ? "text-[30vw]" : "text-[16vw]"
              } font-bold`}
            >
              {remaininTime.hours}
            </div>
          </div>
          <div className="text-5xl md:text-9xl font-bold">:</div>
        </>
      )}
      <div className="flex flex-col items-center justify-around  px-4 md:px-8 py-2 md:py-3 w-[45%]">
        <div
          className={`${
            remaininTime.hours === "0" ? "text-[30vw]" : "text-[16vw]"
          } font-bold`}
        >
          {remaininTime.minutes}
        </div>
      </div>
      <div className="text-5xl md:text-9xl font-bold">:</div>
      <div className="flex flex-col items-center justify-around  px-4 md:px-8 py-2 md:py-3 w-[45%]">
        <div
          className={`${
            remaininTime.hours === "0" ? "text-[30vw]" : "text-[16vw]"
          } font-bold`}
        >
          {remaininTime.seconds}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
