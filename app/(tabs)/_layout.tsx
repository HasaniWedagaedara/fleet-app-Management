import React, { useEffect, useState } from "react";
import OnBoarding from "./onBoarding";
import Splash from "./Splash";

export default function _layout() {
  const [isShowSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  });
  return <>{isShowSplash ? <Splash /> : <OnBoarding />}</>;
}
