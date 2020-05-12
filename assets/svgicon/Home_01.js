import React from "react";
import Svg, { Path } from "react-native-svg";

const Home_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path d="M25 10.34V25h-7v-7a4 4 0 00-8 0v7H3V10.34L14 3z" fill={props.fill} />
  </Svg>
);

export default Home_01;
