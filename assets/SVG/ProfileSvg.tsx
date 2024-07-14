import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface ProfileSvgProps extends SvgProps {
  color: string;
}

const ProfileSvg: React.FC<ProfileSvgProps> = ({ color, ...props }) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M20.9545 21V19C20.9545 17.9391 20.5331 16.9217 19.783 16.1716C19.0328 15.4214 18.0154 15 16.9545 15H8.95453C7.89366 15 6.87625 15.4214 6.1261 16.1716C5.37596 16.9217 4.95453 17.9391 4.95453 19V21"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.9545 11C15.1637 11 16.9545 9.20914 16.9545 7C16.9545 4.79086 15.1637 3 12.9545 3C10.7454 3 8.95453 4.79086 8.95453 7C8.95453 9.20914 10.7454 11 12.9545 11Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ProfileSvg;
