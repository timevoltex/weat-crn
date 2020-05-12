import React from "react";
import Svg, { Path } from "react-native-svg";

const Crown_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M18 11l-4-8-4 8-7-3 4 17h14l4-17zm-4 10a3 3 0 113-3 3 3 0 01-3 3z"
      fill={props.fill}
    />
  </Svg>
);

export default Crown_01;
