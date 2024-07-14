import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg";
const ArrowSvg = (props:SvgProps) => (
  <Svg
    width={25}
    height={14}
    viewBox="0 0 25 14"
    fill="none"
    {...props}
  >
    <Path
      d="M1.16663 7L23.1666 7"
      stroke="url(#paint0_linear_102_6035)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.1666 12.8333L24 6.99996L18.1666 1.16663"
      stroke="url(#paint1_linear_102_6035)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6035"
        x1={-0.141971}
        y1={7.02536}
        x2={-0.0264629}
        y2={4.79538}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6035"
        x1={17.8196}
        y1={0.870732}
        x2={27.4177}
        y2={5.08208}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ArrowSvg;
