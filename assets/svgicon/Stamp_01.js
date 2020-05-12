import React from "react";
import Svg, { Path } from "react-native-svg";

const Stamp_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M6 24h16v2H6zm10-8v-4.42a5 5 0 10-4 0V16l-7 3v4h18v-4z"
      fill={props.fill}
    />
  </Svg>
);

export default Stamp_01;
