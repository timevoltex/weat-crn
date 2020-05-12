import React from "react";
import Svg, { Path } from "react-native-svg";

const Notice_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M24 16v4H4v-4a3 3 0 003-3V9a7 7 0 0114 0v4a3 3 0 003 3zm-6 6a4 4 0 01-8 0z"
      fill={props.fill}
    />
  </Svg>
);

export default Notice_01;
