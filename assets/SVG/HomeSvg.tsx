import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface HomeSvgProps extends SvgProps {
  color: string;
}
const HomeSvg: React.FC<HomeSvgProps> = ({ color, ...props }) => (
  <Svg width={27} height={28} viewBox="0 0 27 28" fill="none" {...props}>
    <Path
      d="M9.43602 3.04004H3.91601C3.15386 3.04004 2.53601 3.65789 2.53601 4.42004V9.94005C2.53601 10.7022 3.15386 11.3201 3.91601 11.3201H9.43602C10.1982 11.3201 10.816 10.7022 10.816 9.94005V4.42004C10.816 3.65789 10.1982 3.04004 9.43602 3.04004Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.235 3.04004H17.715C16.9528 3.04004 16.335 3.65789 16.335 4.42004V9.94005C16.335 10.7022 16.9528 11.3201 17.715 11.3201H23.235C23.9972 11.3201 24.615 10.7022 24.615 9.94005V4.42004C24.615 3.65789 23.9972 3.04004 23.235 3.04004Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.43602 16.8401H3.91601C3.15386 16.8401 2.53601 17.4579 2.53601 18.2201V23.7401C2.53601 24.5023 3.15386 25.1201 3.91601 25.1201H9.43602C10.1982 25.1201 10.816 24.5023 10.816 23.7401V18.2201C10.816 17.4579 10.1982 16.8401 9.43602 16.8401Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.235 16.8401H17.715C16.9528 16.8401 16.335 17.4579 16.335 18.2201V23.7401C16.335 24.5023 16.9528 25.1201 17.715 25.1201H23.235C23.9972 25.1201 24.615 24.5023 24.615 23.7401V18.2201C24.615 17.4579 23.9972 16.8401 23.235 16.8401Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HomeSvg;
