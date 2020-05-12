import React from "react";
import Svg, { Path } from "react-native-svg";

const Gps_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M22.78 12A9.05 9.05 0 0016 5.22V2h-4v3.22A9.05 9.05 0 005.22 12H2v4h3.22A9.05 9.05 0 0012 22.78V26h4v-3.22A9.05 9.05 0 0022.78 16H26v-4zM14 19a5 5 0 115-5 5 5 0 01-5 5z"
      fill={props.fill}
    />
  </Svg>
);

export default Gps_01;
