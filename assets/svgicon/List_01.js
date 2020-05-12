import React from "react";
import Svg, { Path } from "react-native-svg";

const List_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M2 5h4v4H2zm0 7h4v4H2zm0 7h4v4H2zM9 5h17v4H9zm0 7h17v4H9zm0 7h17v4H9z"
      fill={props.fill}
    />
  </Svg>
);

export default List_01;
