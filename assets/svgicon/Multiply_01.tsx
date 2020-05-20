import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Multiply_01 = (props: SvgProps) => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M14 2a12 12 0 1012 12A12 12 0 0014 2zm5.66 16.24l-1.42 1.42L14 15.42l-4.24 4.24-1.42-1.42L12.58 14 8.34 9.76l1.42-1.42L14 12.58l4.24-4.24 1.42 1.42L15.42 14z"
      fill={props.fill}
    />
  </Svg>
);

export default Multiply_01;
