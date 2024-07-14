import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LocationIconSvg = (props:SvgProps) => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <Path
      d="M5.45828 11.2304C5.75743 12.1295 6.32486 12.1612 6.72514 11.3041L11.2757 1.5541C11.676 0.695247 11.3049 0.324961 10.4469 0.725247L0.695999 5.27496C-0.162001 5.67525 -0.12943 6.24268 0.768856 6.54268L4.28571 7.71439L5.45828 11.2304Z"
      fill="white"
    />
  </Svg>
);
export default LocationIconSvg;
