import React from "react";
import Svg, { Path } from "react-native-svg";

const Card_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M2 11v10a2 2 0 002 2h20a2 2 0 002-2V11zm8 9H5v-2h5zM26 7v1H2V7a2 2 0 012-2h20a2 2 0 012 2z"
      fill={props.fill}
    />
  </Svg>
);

export default Card_01;
