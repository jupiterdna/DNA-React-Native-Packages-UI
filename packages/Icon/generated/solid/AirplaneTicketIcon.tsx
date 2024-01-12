//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const AirplaneTicketIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M3.75 4A1.75 1.75 0 002 5.75v3.999l.535.16a2.184 2.184 0 010 4.182l-.535.16v3.999c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 18.25V5.75A1.75 1.75 0 0020.25 4H3.75zm5.037 11.735l-1.734-2.927 1.027-.262 1.25.95 2.423-.588-2.45-4.3 1.477-.342 4.1 3.8 2.488-.67a.83.83 0 01.727.106c.22.148.37.353.446.617.077.265.056.517-.064.758a.897.897 0 01-.586.477l-9.104 2.38z" />
    </Svg>
  );
};
export default AirplaneTicketIcon;
