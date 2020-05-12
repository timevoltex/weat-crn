import React from "react";
import Svg, { Path } from "react-native-svg";

const Plus_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M14 2a12 12 0 1012 12A12 12 0 0014 2zm8 14h-6v6h-4v-6H6v-4h6V6h4v6h6z"
      fill={props.fill}
    />
  </Svg>
);

export default Plus_01;
