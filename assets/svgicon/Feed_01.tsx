import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Feed_01 = (props: SvgProps) => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M3 3v18h8.34L14 25l2.66-4H25V3zm13 13H7v-2h9zm5-6H7V8h14z"
      fill={props.fill}
    />
  </Svg>
);

export default Feed_01;
