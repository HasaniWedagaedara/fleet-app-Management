import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const OilSvg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 16.3C9.2 16.3 11 14.47 11 12.25C11 11.09 10.43 9.99005 9.29 9.06005C8.15 8.13005 7.29 6.75005 7 5.30005C6.71 6.75005 5.86 8.14005 4.71 9.06005C3.56 9.98005 3 11.1 3 12.25C3 14.47 4.8 16.3 7 16.3Z"
      stroke="#29756F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.56 6.60002C13.2478 5.50114 13.7353 4.28906 14 3.02002C14.5 5.52002 16 7.92002 18 9.52002C20 11.12 21 13.02 21 15.02C21.0057 16.4023 20.6009 17.7552 19.8368 18.9071C19.0727 20.059 17.9838 20.9582 16.7081 21.4905C15.4324 22.0229 14.0274 22.1644 12.6712 21.8973C11.3149 21.6302 10.0685 20.9664 9.09 19.99"
      stroke="#29756F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default OilSvg;
