import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface ScheduleSvgProps extends SvgProps {
  color: string;
}

const ScheduleSvg: React.FC<ScheduleSvgProps> = ({ color, ...props }) => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M19 4.8396H5C3.89543 4.8396 3 5.73503 3 6.8396V20.8396C3 21.9442 3.89543 22.8396 5 22.8396H19C20.1046 22.8396 21 21.9442 21 20.8396V6.8396C21 5.73503 20.1046 4.8396 19 4.8396Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 2.8396V6.8396"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 2.8396V6.8396"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 10.8396H21"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ScheduleSvg;
