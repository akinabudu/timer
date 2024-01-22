"use client";
import React, { useState } from "react";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";
import { Provider } from "jotai";

export default function Providers({ children }: { children: React.ReactNode }) {
  // const tawkMessengerRef: any = useRef();
  return (
    <>
      {/* <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID}
        ref={tawkMessengerRef}
      /> */}
      <Provider>

      {children}
      </Provider>
    </>
  );
}
