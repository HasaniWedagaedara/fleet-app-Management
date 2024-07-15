import * as React from "react";
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
  SvgProps,
} from "react-native-svg";
const TeamSvg = (props:SvgProps) => (
  <Svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    {...props}
  >
    <Circle cx={22.0001} cy={22} r={22} fill="white" />
    <G clipPath="url(#clip0_102_6115)">
      <G clipPath="url(#clip1_102_6115)">
        <Path
          d="M27.041 31V29C27.041 27.9391 26.6195 26.9217 25.8694 26.1716C25.1192 25.4214 24.1018 25 23.041 25H15.041C13.9801 25 12.9627 25.4214 12.2125 26.1716C11.4624 26.9217 11.041 27.9391 11.041 29V31"
          stroke="url(#paint0_linear_102_6115)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.041 21C21.2501 21 23.041 19.2091 23.041 17C23.041 14.7909 21.2501 13 19.041 13C16.8318 13 15.041 14.7909 15.041 17C15.041 19.2091 16.8318 21 19.041 21Z"
          stroke="url(#paint1_linear_102_6115)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M33.041 30.9999V28.9999C33.0403 28.1136 32.7453 27.2527 32.2023 26.5522C31.6593 25.8517 30.8991 25.3515 30.041 25.1299"
          stroke="url(#paint2_linear_102_6115)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M26.041 13.1299C26.9014 13.3502 27.664 13.8506 28.2086 14.5522C28.7532 15.2538 29.0488 16.1167 29.0488 17.0049C29.0488 17.8931 28.7532 18.756 28.2086 19.4576C27.664 20.1592 26.9014 20.6596 26.041 20.8799"
          stroke="url(#paint3_linear_102_6115)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6115"
        x1={10.6352}
        y1={24.6431}
        x2={14.1308}
        y2={35.2657}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6115"
        x1={14.8381}
        y1={12.5241}
        x2={22.6202}
        y2={21.3922}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_102_6115"
        x1={29.9649}
        y1={24.7807}
        x2={34.9738}
        y2={27.6979}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_102_6115"
        x1={25.9647}
        y1={12.6689}
        x2={31.5898}
        y2={15.1567}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6115">
        <Rect
          width={34.9884}
          height={34}
          fill="white"
          transform="translate(5.00018 5)"
        />
      </ClipPath>
      <ClipPath id="clip1_102_6115">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(10.041 10)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TeamSvg;
