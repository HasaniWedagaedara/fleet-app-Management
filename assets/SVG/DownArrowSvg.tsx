import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const DownArrowSvg = (props:SvgProps) => (
  <Svg
    width={12}
    height={6}
    viewBox="0 0 12 6"
    fill="none"
    {...props}
  >
    <Path d="M6 6L0.803848 0L11.1962 0L6 6Z" fill="#777777" />
  </Svg>
);
export default DownArrowSvg;
