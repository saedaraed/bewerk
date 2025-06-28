"use client";
import {  useState } from "react";
import Loader from "./Loader"; 
import Navbar from "./Navbar";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);


  if (!loaded) return <Loader onFinish={() => setLoaded(true)} />;

  return (
    <>
      <Navbar />
      <div className="glow-wrapper">
        <div className="glow green" />
        <div className="glow right" />
        <div className="glow blue" />
      </div>
      {children}
      {/* <Footer /> */}
    </>
  );
}
