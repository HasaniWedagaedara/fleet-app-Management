import * as React from "react";
import Svg, { G, Rect, Path, Defs, SvgProps } from "react-native-svg";

const GoBackSvg = (props:SvgProps) => (
  <Svg
    width={86}
    height={86}
    viewBox="0 0 86 86"
    fill="none"
    {...props}
  >
    <G filter="url(#filter0_d_102_5385)">
      <Rect x={20} y={10} width={46} height={46} rx={15} fill="white" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.7899 26.4101C47.3367 26.9568 47.3367 27.8432 46.7899 28.3899L42.1799 33L46.7899 37.6101C47.3367 38.1568 47.3367 39.0432 46.7899 39.5899C46.2432 40.1367 45.3568 40.1367 44.8101 39.5899L39.21 33.9899C38.6633 33.4432 38.6633 32.5568 39.21 32.0101L44.8101 26.4101C45.3568 25.8633 46.2432 25.8633 46.7899 26.4101Z"
      fill="#333333"
    />
    <Defs></Defs>
  </Svg>
);
export default GoBackSvg;
