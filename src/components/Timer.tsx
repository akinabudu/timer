"use client";
import CountdownTimer from "@/components/CountdonwnTimer";
import React, { useState, useEffect } from 'react';
import { GetCookies } from "./Cookies";

export default function Timer() {
  const [timing, setTiming] = useState<any>();
  const hrs = parseInt(GetCookies("hrs") || "0");
  const min = parseInt(GetCookies("min") || "0");
  const sec = parseInt(GetCookies("sec") || "0");
  const currentTime = new Date();
  
  useEffect(() => {
    
    setTiming(new Date(
      currentTime.getTime() + hrs * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000
    ));
  }, [hrs, min, sec]);

  console.log(timing);

  return (
      <CountdownTimer CountdownTimestampMs={timing} />
  );
}
