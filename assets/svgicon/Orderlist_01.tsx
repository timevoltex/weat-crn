import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Orderlist_01 = (props: SvgProps) => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M24.87 6A4 4 0 0021 3H7a4 4 0 00-4 4v18h18V7h4a3.66 3.66 0 00-.13-1zM14 21H7v-2h7zm3-5H7v-2h10zm0-5H7V9h10z"
      fill={props.fill}
    />
  </Svg>
);

export default Orderlist_01;
