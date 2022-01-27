import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const ResetSVG = (props) => (
  <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={16} cy={16} r={16} transform="rotate(-180 16 16)" fill="#EDEBFD" />
    <Path
      d="M24 16a1.143 1.143 0 00-1.143-1.143H17.43a.286.286 0 01-.286-.286V9.143a1.143 1.143 0 00-2.286 0v5.428a.286.286 0 01-.286.286H9.143a1.143 1.143 0 000 2.286h5.428a.286.286 0 01.286.286v5.428a1.143 1.143 0 002.286 0V17.43a.286.286 0 01.286-.286h5.428A1.143 1.143 0 0024 16z"
      fill="#B8B0F6"
    />
  </Svg>
);

export default ResetSVG;
