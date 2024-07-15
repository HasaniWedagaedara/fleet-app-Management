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
const HelpSvg = (props:SvgProps) => (
  <Svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    {...props}
  >
    <Circle cx={22.0001} cy={22} r={22} fill="white" />
    <G clipPath="url(#clip0_102_6146)">
      <Path
        d="M22.029 32C27.5518 32 32.029 27.5228 32.029 22C32.029 16.4772 27.5518 12 22.029 12C16.5061 12 12.029 16.4772 12.029 22C12.029 27.5228 16.5061 32 22.029 32Z"
        stroke="url(#paint0_linear_102_6146)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.119 19.0001C19.3541 18.3317 19.8182 17.7682 20.429 17.4092C21.0398 17.0502 21.7579 16.919 22.4562 17.0388C23.1545 17.1586 23.7878 17.5216 24.2441 18.0636C24.7004 18.6056 24.9501 19.2916 24.949 20.0001C24.949 22.0001 21.949 23.0001 21.949 23.0001"
        stroke="url(#paint1_linear_102_6146)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.029 27H22.039"
        stroke="url(#paint2_linear_102_6146)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6146"
        x1={11.5217}
        y1={10.8104}
        x2={30.977}
        y2={32.9806}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6146"
        x1={18.9712}
        y1={16.6384}
        x2={24.832}
        y2={23.1231}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_102_6146"
        x1={22.0287}
        y1={26.9405}
        x2={22.0511}
        y2={26.9408}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6146">
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
export default HelpSvg;
