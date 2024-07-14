import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";

interface ActivitySvgProps extends SvgProps {
  color: string;
}

const ActivitySvg: React.FC<ActivitySvgProps> = ({ color, ...props }) => (
  <Svg width={28} height={27} viewBox="0 0 28 27" fill="none" {...props}>
    <G clipPath="url(#clip0)">
      <Path
        d="M11.5559 4.69201C11.5559 4.03321 11.8176 3.40139 12.2835 2.93555C12.7493 2.46971 13.3811 2.20801 14.0399 2.20801C14.6987 2.20801 15.3305 2.46971 15.7964 2.93555C16.2622 3.40139 16.5239 4.03321 16.5239 4.69201C17.9502 5.36645 19.1661 6.41631 20.0413 7.72907C20.9165 9.04183 21.4179 10.568 21.4919 12.144V15.87C21.5854 16.6422 21.8588 17.3816 22.2903 18.0288C22.7217 18.6759 23.2991 19.2127 23.9759 19.596H4.10391C4.78073 19.2127 5.3581 18.6759 5.78954 18.0288C6.22098 17.3816 6.49445 16.6422 6.58791 15.87V12.144C6.66189 10.568 7.16333 9.04183 8.03851 7.72907C8.91368 6.41631 10.1296 5.36645 11.5559 4.69201"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3139 19.5959V20.8379C10.3139 21.8261 10.7065 22.7739 11.4052 23.4726C12.104 24.1714 13.0517 24.564 14.0399 24.564C15.0281 24.564 15.9758 24.1714 16.6746 23.4726C17.3733 22.7739 17.7659 21.8261 17.7659 20.8379V19.5959"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect
          width={26.496}
          height={26.496}
          fill="white"
          transform="translate(0.791992)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ActivitySvg;
