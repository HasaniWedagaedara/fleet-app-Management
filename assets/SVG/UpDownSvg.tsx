import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const UpDownSvg = (props:SvgProps) => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    {...props}
  >
    <Path
      d="M7 14H3.5L8.75 19.25V1.75H7V14ZM12.25 4.375V19.25H14V7H17.5L12.25 1.75V4.375Z"
      fill="#666666"
    />
  </Svg>
);
export default UpDownSvg;
