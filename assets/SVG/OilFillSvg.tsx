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
const OilFillSvg = (props:SvgProps) => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    {...props}
  >
    <Circle cx={30} cy={30} r={30} fill="white" />
    <G clipPath="url(#clip0_102_6659)">
      <Path
        d="M25 33.3C27.2 33.3 29 31.47 29 29.25C29 28.09 28.43 26.99 27.29 26.06C26.15 25.13 25.29 23.75 25 22.3C24.71 23.75 23.86 25.14 22.71 26.06C21.56 26.98 21 28.1 21 29.25C21 31.47 22.8 33.3 25 33.3Z"
        stroke="url(#paint0_linear_102_6659)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.56 23.6C31.2478 22.5011 31.7353 21.2891 32 20.02C32.5 22.52 34 24.92 36 26.52C38 28.12 39 30.02 39 32.02C39.0057 33.4023 38.6009 34.7552 37.8368 35.9071C37.0727 37.059 35.9838 37.9582 34.7082 38.4905C33.4325 39.0229 32.0274 39.1644 30.6712 38.8973C29.315 38.6302 28.0686 37.9664 27.09 36.99"
        stroke="url(#paint1_linear_102_6659)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6659"
        x1={20.7971}
        y1={21.6458}
        x2={31.4013}
        y2={30.4341}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6659"
        x1={26.788}
        y1={18.8893}
        x2={44.4266}
        y2={31.4831}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6659">
        <Rect
          width={34}
          height={34}
          fill="white"
          transform="translate(13 13)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default OilFillSvg;
