import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Minus_01 = (props: SvgProps) => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M14 2a12 12 0 1012 12A12 12 0 0014 2zm7 13H7v-2h14z"
      fill={props.fill}
    />
  </Svg>
);

export default Minus_01;
