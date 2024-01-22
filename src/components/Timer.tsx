"use client"
import CountdownTimer from "@/components/CountdonwnTimer";
import { useAtom } from "jotai";
import React from "react";
import { AtomTimer } from "@/app/settings/page";

export default function Timer() {
  const[timer,setTimer]=React.useState<Date>()
  const [timed, setTimed] = useAtom(AtomTimer);
  const { hrs, min, sec } = timed;
  console.log(hrs, min, sec);

  React.useEffect(() => {
    const updateTimer = () => {
      const currentTime = new Date();
      const timing = new Date(
        currentTime.getTime() + hrs * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000
      );
      setTimer(timing);
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  },[] );

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <CountdownTimer CountdownTimestampMs={timer} />
    </div>
  );
}
