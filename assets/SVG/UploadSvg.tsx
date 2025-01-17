import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const UploadSvg = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_102_7002)">
      <Path
        d="M8 17L12 21L16 17"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12V21"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.88 18.0901C21.7494 17.4787 22.4014 16.6062 22.7413 15.5992C23.0812 14.5922 23.0914 13.5031 22.7704 12.4899C22.4494 11.4767 21.8139 10.5921 20.9561 9.96462C20.0983 9.33709 19.0628 8.99922 18 9.00006H16.74C16.4392 7.82793 15.8765 6.7393 15.0941 5.81614C14.3117 4.89297 13.3301 4.15932 12.2232 3.67041C11.1163 3.1815 9.91284 2.95008 8.70352 2.99357C7.4942 3.03706 6.31051 3.35433 5.24155 3.92148C4.17259 4.48864 3.24622 5.2909 2.53218 6.26788C1.81814 7.24487 1.33505 8.3711 1.11925 9.5618C0.903464 10.7525 0.960604 11.9767 1.28637 13.1421C1.61214 14.3075 2.19805 15.3838 2.99999 16.2901"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_102_7002">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UploadSvg;
