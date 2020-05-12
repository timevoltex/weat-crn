import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Ticket_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Circle cx={10} cy={11} r={1} fill={props.fill} />
    <Path
      d="M26 7V5H2v2a1 1 0 010 2v2a1 1 0 010 2v2a1 1 0 010 2v2a1 1 0 010 2v2h24v-2a1 1 0 010-2v-2a1 1 0 010-2v-2a1 1 0 010-2V9a1 1 0 010-2zM7 11a3 3 0 113 3 3 3 0 01-3-3zm1 8l9-10h3l-9 10zm10 1a3 3 0 113-3 3 3 0 01-3 3zm0-4a1 1 0 101 1 1 1 0 00-1-1z"
      fill={props.fill}
    />
  </Svg>
);

export default Ticket_01;
