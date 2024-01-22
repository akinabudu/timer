"use client";
import Link from "next/link";
import React from "react";
import { SettingsForm } from "@/components/Form";

export default function Settings() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      <SettingsForm />
    </div>
  );
}
