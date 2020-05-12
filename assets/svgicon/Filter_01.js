import React from "react";
import Svg, { Path } from "react-native-svg";

const Filter_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M21 12.5h4v3h-4v2h-3v-7h3v2zM10 18h3v7h-3v-2H3v-3h7v-2zm2-13h13v3H12zm3 15h10v3H15zM7 8H3V5h4V3h3v7H7V8zm-4 4.5h13v3H3z"
      fill={props.fill}
    />
  </Svg>
);

export default Filter_01;
