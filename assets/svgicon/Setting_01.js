import React from "react";
import Svg, { Path } from "react-native-svg";

const Setting_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M26 16v-4l-3.41-.68a8.94 8.94 0 00-.59-1.5l1.9-2.89-2.83-2.83L18.18 6a8.94 8.94 0 00-1.5-.62L16 2h-4l-.68 3.41a8.94 8.94 0 00-1.5.59L6.93 4.1 4.1 6.93 6 9.82a8.94 8.94 0 00-.62 1.5L2 12v4l3.41.68a8.94 8.94 0 00.59 1.5l-1.9 2.89 2.83 2.83L9.82 22a8.94 8.94 0 001.5.62L12 26h4l.68-3.41a8.94 8.94 0 001.5-.62l2.89 1.93 2.83-2.83-1.9-2.89a8.94 8.94 0 00.62-1.5zm-12 2a4 4 0 114-4 4 4 0 01-4 4z"
      fill={props.fill}
    />
  </Svg>
);

export default Setting_01;
