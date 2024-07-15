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
const ShareSvg = (props:SvgProps) => (
  <Svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    {...props}
  >
    <Circle cx={22.0001} cy={22} r={22} fill="white" />
    <G clipPath="url(#clip0_102_6131)">
      <Path
        d="M14.7349 22V30C14.7349 30.5304 14.9456 31.0391 15.3206 31.4142C15.6957 31.7893 16.2044 32 16.7349 32H28.7349C29.2653 32 29.774 31.7893 30.1491 31.4142C30.5241 31.0391 30.7349 30.5304 30.7349 30V22"
        stroke="url(#paint0_linear_102_6131)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.7349 16L22.7349 12L18.7349 16"
        stroke="url(#paint1_linear_102_6131)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.7349 12V25"
        stroke="url(#paint2_linear_102_6131)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6131"
        x1={14.3291}
        y1={21.4052}
        x2={22.6021}
        y2={36.4892}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6131"
        x1={18.532}
        y1={11.7621}
        x2={21.4197}
        y2={18.3436}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_102_6131"
        x1={22.7095}
        y1={11.2267}
        x2={24.9284}
        y2={11.4212}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6131">
        <Rect
          width={24.6977}
          height={24}
          fill="white"
          transform="translate(10.0002 10)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ShareSvg;
