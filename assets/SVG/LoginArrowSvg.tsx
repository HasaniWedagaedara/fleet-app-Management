import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LoginArrowSvg = (props:SvgProps) => (
  <Svg
    width={26}
    height={14}
    viewBox="0 0 26 14"
    fill="none"
    {...props}
  >
    <Path
      d="M1.58334 7L23.5833 7"
      stroke="#F2F2F2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.5833 12.8333L24.4167 6.99999L18.5833 1.16666"
      stroke="#F2F2F2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LoginArrowSvg;
