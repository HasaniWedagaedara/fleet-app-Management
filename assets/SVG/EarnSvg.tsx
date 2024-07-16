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
const EarnSvg = (props:SvgProps) => (
  <Svg
    width={50}
    height={60}
    viewBox="0 0 50 60"
    fill="none"
    {...props}
  >
    <Circle cx={30} cy={30} r={30} fill="white" />
    <G clipPath="url(#clip0_102_6684)">
      <Path
        d="M30 19V41"
        stroke="url(#paint0_linear_102_6684)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35 23H27.5C26.5717 23 25.6815 23.3687 25.0251 24.0251C24.3687 24.6815 24 25.5717 24 26.5C24 27.4283 24.3687 28.3185 25.0251 28.9749C25.6815 29.6313 26.5717 30 27.5 30H32.5C33.4283 30 34.3185 30.3687 34.9749 31.0251C35.6313 31.6815 36 32.5717 36 33.5C36 34.4283 35.6313 35.3185 34.9749 35.9749C34.3185 36.6313 33.4283 37 32.5 37H24"
        stroke="url(#paint1_linear_102_6684)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6684"
        x1={29.9746}
        y1={17.6914}
        x2={32.2046}
        y2={17.8069}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6684"
        x1={23.6957}
        y1={22.1673}
        x2={37.4269}
        y2={35.5793}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6684">
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
export default EarnSvg;
