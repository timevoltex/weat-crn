import React from "react";
import Svg, { Path } from "react-native-svg";

const Locationmark_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M21.91 18.38a2.15 2.15 0 01-.18.23l-.13.14-.14.16-.31.33c-2 2.11-6.9 6.75-6.9 6.75l-1.17-3.84A10.11 10.11 0 015 7.59l4.25 2.83A1.79 1.79 0 0110 12a3.69 3.69 0 000 .47 4 4 0 102.32-3.95 1.78 1.78 0 01-1.74-.15L6.36 5.5A10.05 10.05 0 0114.19 2a10.1 10.1 0 017.72 16.38z"
      fill={props.fill}
    />
  </Svg>
);

export default Locationmark_01;
