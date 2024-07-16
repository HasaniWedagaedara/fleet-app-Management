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
const IndicatorSvg = (props:SvgProps) => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    {...props}
  >
    <Circle cx={30} cy={30} r={30} fill="white" />
    <G clipPath="url(#clip0_102_6670)">
      <Path
        d="M20 30H23"
        stroke="url(#paint0_linear_102_6670)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M37 30H40"
        stroke="url(#paint1_linear_102_6670)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30 20V23"
        stroke="url(#paint2_linear_102_6670)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30 37V40"
        stroke="url(#paint3_linear_102_6670)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30 37C33.866 37 37 33.866 37 30C37 26.134 33.866 23 30 23C26.134 23 23 26.134 23 30C23 33.866 26.134 37 30 37Z"
        stroke="url(#paint4_linear_102_6670)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30 33C31.6569 33 33 31.6569 33 30C33 28.3431 31.6569 27 30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33Z"
        stroke="url(#paint5_linear_102_6670)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6670"
        x1={19.9239}
        y1={29.9405}
        x2={20.4526}
        y2={31.748}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6670"
        x1={36.9239}
        y1={29.9405}
        x2={37.4526}
        y2={31.748}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_102_6670"
        x1={29.9746}
        y1={19.8216}
        x2={31.9287}
        y2={20.5638}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_102_6670"
        x1={29.9746}
        y1={36.8216}
        x2={31.9287}
        y2={37.5638}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_102_6670"
        x1={22.6449}
        y1={22.1673}
        x2={36.2636}
        y2={37.6864}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_102_6670"
        x1={26.8478}
        y1={26.6431}
        x2={32.6844}
        y2={33.2942}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6670">
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
export default IndicatorSvg;
