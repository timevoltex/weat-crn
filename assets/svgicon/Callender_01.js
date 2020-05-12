import React from "react";
import Svg, { Path } from "react-native-svg";

const Callender_01 = props => (
  <Svg viewBox="0 0 28 28" width={28} height={28} {...props}>
    <Path
      d="M25 5v4H3V5h4V3h2v2h10V3h2v2h4zM3 11v14h22V11zm7.7 11A3.4 3.4 0 018 20.93l.87-1.19a2.46 2.46 0 001.64.76c.73 0 1.21-.29 1.21-.84s-.36-1-2-1v-1.37c1.35 0 1.77-.4 1.77-1s-.31-.8-.9-.8a2.08 2.08 0 00-1.41.66L8.21 15a3.75 3.75 0 012.45-1c1.63 0 2.7.78 2.7 2.13a1.81 1.81 0 01-1.26 1.7v.05a1.9 1.9 0 011.51 1.86c0 1.48-1.34 2.26-2.91 2.26zm9.3-.15h-5v-1.5h1.7v-4.27h-1.45v-1.17a5.5 5.5 0 001.94-.72h1.39v6.16H20z"
      fill={props.fill}
    />
  </Svg>
);

export default Callender_01;
