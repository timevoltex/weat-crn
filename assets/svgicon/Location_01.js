import React from "react";
import Svg, { Path } from "react-native-svg";

const Location_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M14 2a9 9 0 00-9 9 7.09 7.09 0 000 .92C5.68 19.53 14 26 14 26s8.32-6.47 9-14.08c0-.1.05-.71.05-.92A9 9 0 0014 2zm0 5a4 4 0 11-4 4 4 4 0 014-4z"
      fill={props.fill}
    />
  </Svg>
);

export default Location_01;
