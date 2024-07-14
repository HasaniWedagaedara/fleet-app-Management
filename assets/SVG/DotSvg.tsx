import * as React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";
const DotSvg = (props:SvgProps) => (
  <Svg
    width={9}
    height={9}
    viewBox="0 0 9 9"
    fill="none"
    {...props}
  >
    <Circle cx={4.50003} cy={4.83329} r={4.16667} fill="#FFAB7B" />
  </Svg>
);
export default DotSvg;
