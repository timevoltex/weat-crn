import React from "react";
import Svg, { Path } from "react-native-svg";

const Back_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      fill={props.fill}
      d="M26 16H9.66l4.17 4.17L11 23l-9-9 9-9 2.83 2.83L9.66 12H26v4z"
    />
  </Svg>
);

export default Back_01;
