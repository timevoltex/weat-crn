import React from "react";
import Svg, { Path } from "react-native-svg";

const Bookmark_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path fill={props.fill} d="M23 26l-9-9-9 9V2h18v24z" />
  </Svg>
);

export default Bookmark_01;
