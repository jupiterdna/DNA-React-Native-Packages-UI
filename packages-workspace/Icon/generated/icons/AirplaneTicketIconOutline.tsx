//this is auto-generated files please do not edit!
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const wrapper = (props: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M8.787 15.735l9.104-2.38a.897.897 0 00.586-.478c.12-.24.141-.493.064-.758a1.081 1.081 0 00-.446-.617.83.83 0 00-.727-.106l-2.488.67-4.1-3.8-1.477.342 2.45 4.3-2.423.588-1.25-.95-1.027.262 1.734 2.927z" />
      <Path d="M3.75 4A1.75 1.75 0 002 5.75v3.999l.535.16a2.184 2.184 0 010 4.182l-.535.16v3.999c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 18.25V5.75A1.75 1.75 0 0020.25 4H3.75zM3.5 5.75a.25.25 0 01.25-.25h16.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H3.75a.25.25 0 01-.25-.25v-2.929a3.682 3.682 0 000-6.642V5.75z" />
    </Svg>
  );
};
const AirplaneTicketIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AirplaneTicketIconOutline;
