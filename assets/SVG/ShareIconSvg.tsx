import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ShareIconSvg = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M4.16675 12.5C5.54746 12.5 6.66675 11.3807 6.66675 10C6.66675 8.61929 5.54746 7.5 4.16675 7.5C2.78604 7.5 1.66675 8.61929 1.66675 10C1.66675 11.3807 2.78604 12.5 4.16675 12.5Z"
      stroke="#323334"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1667 7.5C15.5475 7.5 16.6667 6.38071 16.6667 5C16.6667 3.61929 15.5475 2.5 14.1667 2.5C12.786 2.5 11.6667 3.61929 11.6667 5C11.6667 6.38071 12.786 7.5 14.1667 7.5Z"
      stroke="#323334"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1667 17.5C15.5475 17.5 16.6667 16.3807 16.6667 15C16.6667 13.6193 15.5475 12.5 14.1667 12.5C12.786 12.5 11.6667 13.6193 11.6667 15C11.6667 16.3807 12.786 17.5 14.1667 17.5Z"
      stroke="#323334"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.41675 8.91659L11.9168 6.08325"
      stroke="#323334"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.41675 11.0833L11.9168 13.9166"
      stroke="#323334"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ShareIconSvg;
