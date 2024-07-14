import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";

interface FleetSvgProps extends SvgProps {
  color: string;
}

const FleetSvg: React.FC<FleetSvgProps> = ({ color, ...props }) => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
    <G clipPath="url(#clip0)">
      <Path
        d="M16.6718 3.51245H1.67181V16.5125H16.6718V3.51245Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.6718 8.51245H20.6718L23.6718 11.5125V16.5125H16.6718V8.51245Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.17181 21.5125C7.55253 21.5125 8.67181 20.3932 8.67181 19.0125C8.67181 17.6317 7.55253 16.5125 6.17181 16.5125C4.7911 16.5125 3.67181 17.6317 3.67181 19.0125C3.67181 20.3932 4.7911 21.5125 6.17181 21.5125Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.1718 21.5125C20.5525 21.5125 21.6718 20.3932 21.6718 19.0125C21.6718 17.6317 20.5525 16.5125 19.1718 16.5125C17.7911 16.5125 16.6718 17.6317 16.6718 19.0125C16.6718 20.3932 17.7911 21.5125 19.1718 21.5125Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0.671814 0.512451)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FleetSvg;
