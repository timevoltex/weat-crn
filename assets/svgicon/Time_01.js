import React from "react";
import Svg, { Path } from "react-native-svg";

const Time_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M14 2a12 12 0 1012 12A12 12 0 0014 2zm7 16h-9V6h4v8h5z"
      fill={props.fill}
    />
  </Svg>
);

export default Time_01;
