import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg";


const FilterSvg
 = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
      stroke="url(#paint0_linear_102_6029)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6029"
        x1={1.49275}
        y1={1.92933}
        x2={18.6715}
        y2={23.6805}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default FilterSvg
;
