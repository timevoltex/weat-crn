import React from "react";
import Svg, { Path } from "react-native-svg";

const Feed_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M3 3v18h8.34L14 25l2.66-4H25V3zm4 12h8v2H7zm14-2H7v-2h14zm0-4H7V7h14z"
      fill={props.fill}
    />
  </Svg>
);

export default Feed_01;
