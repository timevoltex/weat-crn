import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Coupon_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Circle cx={10} cy={11} r={1} fill={props.fill} />
    <Path
      d="M24.36 14l1.46-2.08-2.09-1.47.66-2.45-2.46-.66-.22-2.53-2.53.19-1.08-2.28-2.3 1.08L14 2l-1.8 1.8-2.3-1.08L8.82 5l-2.53-.19-.22 2.53L3.61 8l.66 2.45-2.09 1.47L3.64 14l-1.46 2.08 2.09 1.47L3.61 20l2.46.66.22 2.53L8.82 23l1.08 2.28 2.3-1.08L14 26l1.8-1.8 2.3 1.08L19.18 23l2.53.22.22-2.53 2.46-.69-.66-2.45 2.09-1.47zM7 11a3 3 0 113 3 3 3 0 01-3-3zm4 8H8l9-10h3zm7 1a3 3 0 113-3 3 3 0 01-3 3zm0-4a1 1 0 101 1 1 1 0 00-1-1z"
      fill={props.fill}
    />
  </Svg>
);

export default Coupon_01;
