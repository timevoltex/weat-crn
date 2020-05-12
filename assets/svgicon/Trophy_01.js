import React from "react";
import Svg, { Path } from "react-native-svg";

const Trophy_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M16 21v-3.35A6 6 0 0020 12V3H8v9a6 6 0 004 5.65V21H9l-2 2v2h14v-2l-2-2zM3 5h3v7H3zm19 0h3v7h-3z"
      fill={props.fill}
    />
  </Svg>
);

export default Trophy_01;
