import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Plus_01 = (props: SvgProps) => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M14 2a12 12 0 1012 12A12 12 0 0014 2zm7 13h-6v6h-2v-6H7v-2h6V7h2v6h6z"
      fill={props.fill}
    />
  </Svg>
);

export default Plus_01;
