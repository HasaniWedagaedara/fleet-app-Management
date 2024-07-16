import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const CalendarSvg = (props:SvgProps) => (
  <Svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    {...props}
  >
    <Path
      d="M13.4583 2.83325H3.54167C2.75926 2.83325 2.125 3.46752 2.125 4.24992V14.1666C2.125 14.949 2.75926 15.5833 3.54167 15.5833H13.4583C14.2407 15.5833 14.875 14.949 14.875 14.1666V4.24992C14.875 3.46752 14.2407 2.83325 13.4583 2.83325Z"
      stroke="#F2F2F2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.3334 1.41675V4.25008"
      stroke="#F2F2F2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.66663 1.41675V4.25008"
      stroke="#F2F2F2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.125 7.08325H14.875"
      stroke="#F2F2F2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CalendarSvg;
