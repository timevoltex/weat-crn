import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Mypage_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Circle cx={14} cy={9} r={6} fill={props.fill} />
    <Path d="M25 25H3c0-4.42 4.92-8 11-8s11 3.58 11 8z" fill={props.fill} />
  </Svg>
);

export default Mypage_01;
