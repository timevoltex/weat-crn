import React from "react";
import Svg, { Path } from "react-native-svg";

const Medal_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M25 3h-5l-4.14 6.22a8 8 0 00-3.72 0L8 3H3l5.48 8.21a8 8 0 1011 0zM14 21a4 4 0 01-4-4 4 4 0 013.29-3.93 3.64 3.64 0 011.42 0A4 4 0 0118 17a4 4 0 01-4 4z"
      fill={props.fill}
    />
  </Svg>
);

export default Medal_01;
