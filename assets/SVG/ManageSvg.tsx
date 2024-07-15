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
const ManageSvg = (props:SvgProps) => (
  <Svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    {...props}
  >
    <Circle cx={22.0001} cy={22} r={22} fill="white" />
    <G clipPath="url(#clip0_102_6161)">
      <G clipPath="url(#clip1_102_6161)">
        <Path
          d="M31.029 14H13.029C11.9244 14 11.029 14.8954 11.029 16V28C11.029 29.1046 11.9244 30 13.029 30H31.029C32.1336 30 33.029 29.1046 33.029 28V16C33.029 14.8954 32.1336 14 31.029 14Z"
          stroke="url(#paint0_linear_102_6161)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.029 20H33.029"
          stroke="url(#paint1_linear_102_6161)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6161"
        x1={10.471}
        y1={13.0483}
        x2={24.7083}
        y2={35.3563}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6161"
        x1={10.471}
        y1={19.9405}
        x2={10.5492}
        y2={21.8996}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6161">
        <Rect
          width={24.6977}
          height={24}
          fill="white"
          transform="translate(10.0002 10)"
        />
      </ClipPath>
      <ClipPath id="clip1_102_6161">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(10.029 10)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ManageSvg;
