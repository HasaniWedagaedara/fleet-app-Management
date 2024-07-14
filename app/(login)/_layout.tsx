import React, { useEffect, useState } from "react";
import Splash from ".";
import OnBoarding from "./onBoarding";
import Index from ".";

export default function LoginLayout() {
  const [isShowSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{isShowSplash ? <Index /> : <OnBoarding   />}</>;
}
