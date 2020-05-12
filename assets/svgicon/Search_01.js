import React from "react";
import Svg, { Path } from "react-native-svg";

const Search_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M19.61 16.78A8.89 8.89 0 0021 12a9 9 0 10-9 9 8.89 8.89 0 004.78-1.39L22.17 25 25 22.17zM7 12a5 5 0 115 5 5 5 0 01-5-5z"
      fill={props.fill}
    />
  </Svg>
);

export default Search_01;
