import React from "react";
import Svg, { Path } from "react-native-svg";

const Event_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M14 2a12 12 0 1012 12A12 12 0 0014 2zm1 19h-2v-2h2zm0-4h-2V7h2z"
      fill={props.fill}
    />
  </Svg>
);

export default Event_01;
