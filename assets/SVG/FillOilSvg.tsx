import * as React from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from "react-native-svg";
const FillOilSvg = (props:SvgProps) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="white" />
    <Path
      d="M10 19.3C12.2 19.3 14 17.47 14 15.25C14 14.09 13.43 12.99 12.29 12.06C11.15 11.13 10.29 9.75005 10 8.30005C9.71 9.75005 8.86 11.14 7.71 12.06C6.56 12.98 6 14.1 6 15.25C6 17.47 7.8 19.3 10 19.3Z"
      stroke="url(#paint0_linear_102_6969)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.56 9.60002C16.2478 8.50114 16.7353 7.28906 17 6.02002C17.5 8.52002 19 10.92 21 12.52C23 14.12 24 16.02 24 18.02C24.0057 19.4023 23.6009 20.7552 22.8368 21.9071C22.0727 23.059 20.9838 23.9582 19.7081 24.4905C18.4324 25.0229 17.0274 25.1644 15.6712 24.8973C14.3149 24.6302 13.0685 23.9664 12.09 22.99"
      stroke="url(#paint1_linear_102_6969)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6969"
        x1={5.7971}
        y1={7.64575}
        x2={16.4013}
        y2={16.4341}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6969"
        x1={11.7879}
        y1={4.88934}
        x2={29.4266}
        y2={17.4831}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default FillOilSvg;
