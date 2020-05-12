import React from "react";
import Svg, { Path } from "react-native-svg";

const Quest_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M14 2a12 12 0 1012 12A12 12 0 0014 2zm-2 4h4v10h-4zm4 16h-4v-4h4z"
      fill={props.fill}
    />
  </Svg>
);

export default Quest_01;
