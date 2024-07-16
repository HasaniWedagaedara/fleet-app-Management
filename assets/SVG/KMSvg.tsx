import * as React from "react";
import Svg, {
  Circle,
  G,
  Path,
  Line,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
  SvgProps,
} from "react-native-svg";
const KMSvg = (props:SvgProps) => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    {...props}
  >
    <Circle cx={30} cy={30} r={30} fill="white" />
    <G clipPath="url(#clip0_102_6650)">
      <Path
        d="M21.4286 20.5H38.5714C38.7418 20.5 38.9662 20.5997 39.1681 20.8966L39.5793 20.617L39.1681 20.8966C39.3706 21.1944 39.5 21.6268 39.5 22.1013V38.8987C39.5 39.3732 39.3706 39.8056 39.1681 40.1034C38.9662 40.4003 38.7418 40.5 38.5714 40.5H21.4286C21.2582 40.5 21.0338 40.4003 20.8319 40.1034C20.6294 39.8056 20.5 39.3732 20.5 38.8987V26.4221V22.1013C20.5 21.6268 20.6294 21.1944 20.8319 20.8966C21.0338 20.5997 21.2582 20.5 21.4286 20.5Z"
        fill="white"
        stroke="url(#paint0_linear_102_6650)"
      />
      <Line
        x1={31}
        y1={21}
        x2={31}
        y2={39}
        stroke="url(#paint1_linear_102_6650)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6650"
        x1={19.4928}
        y1={18.7509}
        x2={40.0265}
        y2={41.0358}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6650"
        x1={30.0595}
        y1={19.4928}
        x2={28.1011}
        y2={19.5787}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6650">
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
export default KMSvg;
