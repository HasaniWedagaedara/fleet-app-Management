import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BlackArrow = (props:SvgProps) => (
  <Svg
    width={25}
    height={15}
    viewBox="0 0 25 15"
    fill="none"
    {...props}
  >
    <Path
      d="M1.16666 7.5L23.1667 7.5"
      stroke="#333333"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.1667 13.3334L24 7.50008L18.1667 1.66675"
      stroke="#333333"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BlackArrow;
