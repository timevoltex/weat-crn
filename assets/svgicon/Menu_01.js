import React from "react";
import Svg, { Path } from "react-native-svg";

const Menu_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M2 21h24v2H2zm22-4v2H4v-2a10 10 0 019-9.95V5h2v2.05A10 10 0 0124 17z"
      fill={props.fill}
    />
  </Svg>
);

export default Menu_01;
