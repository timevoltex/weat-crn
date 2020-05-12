import React from "react";
import Svg, { Path } from "react-native-svg";

const Review_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M3 20v5h5l12-12-5-5L3 20zM16.997 5.996l2.998-2.998 5 5-2.999 2.997z"
      fill={props.fill}
    />
  </Svg>
);

export default Review_01;
