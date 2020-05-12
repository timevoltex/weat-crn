import React from "react";
import Svg, { Path } from "react-native-svg";

const Marketing_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M21 4v18h-4a4 4 0 00-.08-.85 4.57 4.57 0 00-.39-1.27l-.13-.26A5 5 0 0012 17v7H8V9h4a5 5 0 004.4-2.62l.13-.26a4.57 4.57 0 00.39-1.27A4 4 0 0017 4z"
      fill={props.fill}
    />
    <Path
      d="M16.92 21.15a6.17 6.17 0 00-.39-1.27 4.57 4.57 0 01.39 1.27zm0-16.3a4.57 4.57 0 01-.39 1.27 6.17 6.17 0 00.39-1.27zM26 13a3 3 0 01-3 3v-6a3 3 0 013 3zM6 9v8H4a2 2 0 01-2-2v-4a2 2 0 012-2z"
      fill={props.fill}
    />
  </Svg>
);

export default Marketing_01;
