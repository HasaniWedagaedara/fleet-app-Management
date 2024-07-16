import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const eYEsVG = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M1.66666 10.2778C1.66666 10.2778 4.99999 4.16666 9.99999 4.16666C15 4.16666 18.3333 10.2778 18.3333 10.2778C18.3333 10.2778 15 16.3889 9.99999 16.3889C4.99999 16.3889 1.66666 10.2778 1.66666 10.2778Z"
      stroke="#555758"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.99998 13.0556C11.5341 13.0556 12.7778 11.8119 12.7778 10.2778C12.7778 8.74365 11.5341 7.5 9.99998 7.5C8.46585 7.5 7.2222 8.74365 7.2222 10.2778C7.2222 11.8119 8.46585 13.0556 9.99998 13.0556Z"
      stroke="#555758"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default eYEsVG;
