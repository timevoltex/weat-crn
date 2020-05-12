import React from "react";
import Svg, { Path } from "react-native-svg";

const Diner_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M3 3h6v10H3zm20 12v10h-6v-4a3 3 0 00-6 0v4H5V15zM11 3h6v10h-6zm8 0h6v10h-6z"
      fill={props.fill}
    />
  </Svg>
);

export default Diner_01;
