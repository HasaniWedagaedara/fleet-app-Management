import * as React from "react";
import Svg, {
  Rect,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  SvgProps,
} from "react-native-svg";
const EmailSvg = (props:SvgProps) => (
  <Svg
    width={62}
    height={48}
    viewBox="0 0 62 48"
    fill="none"
    {...props}
  >
    <Rect width={61.8198} height={48} rx={10} fill="#F4F7F6" />
    <Path
      d="M22.5578 37.9043V39H17.6379V31.2495H22.5578V32.3452H18.841V34.5366H22.3591V35.5786H18.841V37.9043H22.5578ZM24.1638 39V33.1509H25.2756V34.0908H25.3615C25.6194 33.4302 26.2102 33.0381 26.989 33.0381C27.7893 33.0381 28.3425 33.4517 28.6003 34.0908H28.6916C28.987 33.4517 29.6584 33.0381 30.4695 33.0381C31.6511 33.0381 32.3386 33.7524 32.3386 34.9717V39H31.1838V35.2725C31.1838 34.4829 30.8078 34.0962 30.0505 34.0962C29.3039 34.0962 28.8152 34.6333 28.8152 35.3208V39H27.6819V35.1597C27.6819 34.499 27.2414 34.0962 26.5539 34.0962C25.8503 34.0962 25.3186 34.6709 25.3186 35.4229V39H24.1638ZM35.8728 38.1245C36.7429 38.1245 37.3874 37.5713 37.3874 36.8462V36.3574L35.9587 36.4487C35.153 36.5024 34.7878 36.7764 34.7878 37.292C34.7878 37.8184 35.2444 38.1245 35.8728 38.1245ZM35.5774 39.0967C34.4494 39.0967 33.6277 38.4146 33.6277 37.3457C33.6277 36.293 34.4118 35.686 35.8029 35.6001L37.3874 35.5088V35.0039C37.3874 34.3862 36.9792 34.0371 36.1897 34.0371C35.5451 34.0371 35.0993 34.2734 34.9704 34.687H33.8532C33.9714 33.6826 34.9167 33.0381 36.2434 33.0381C37.7097 33.0381 38.5368 33.7686 38.5368 35.0039V39H37.425V38.1782H37.3337C36.9846 38.7637 36.3454 39.0967 35.5774 39.0967ZM40.2019 39V33.1509H41.3513V39H40.2019ZM40.7766 32.1357C40.3737 32.1357 40.0461 31.7974 40.0461 31.3838C40.0461 30.9648 40.3737 30.6265 40.7766 30.6265C41.1794 30.6265 41.507 30.9648 41.507 31.3838C41.507 31.7974 41.1794 32.1357 40.7766 32.1357ZM43.1023 39V30.8682H44.257V39H43.1023Z"
      fill="url(#paint0_linear_102_6592)"
    />
    <G clipPath="url(#clip0_102_6592)">
      <Path
        d="M39 8.00049H25C23.8954 8.00049 23 8.89592 23 10.0005V20.0005C23 21.1051 23.8954 22.0005 25 22.0005H39C40.1046 22.0005 41 21.1051 41 20.0005V10.0005C41 8.89592 40.1046 8.00049 39 8.00049Z"
        stroke="url(#paint1_linear_102_6592)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 10.0005L32 16.0005L41 10.0005"
        stroke="url(#paint2_linear_102_6592)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_102_6592"
        x1={-1.56789}
        y1={26.0483}
        x2={5.21271}
        y2={55.9027}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_102_6592"
        x1={22.5435}
        y1={7.16774}
        x2={35.3342}
        y2={25.9078}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_102_6592"
        x1={22.5435}
        y1={9.6436}
        x2={25.7158}
        y2={20.4886}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#429690" />
        <Stop offset={1} stopColor="#2A7C76" />
      </LinearGradient>
      <ClipPath id="clip0_102_6592">
        <Rect
          width={19.9419}
          height={20}
          fill="white"
          transform="translate(21.9363 5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EmailSvg;
