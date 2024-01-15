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
      <Path d="M11.285 2.724H2.723v10.404h8.562V2.724zM21.277 21.276H13.25V10.873h8.027v10.403zM2.723 15.128h8.562v6.148H2.723v-6.148zM21.277 8.873H13.25V2.724h8.027v6.149z" />
    </Svg>
  );
};
const DashboardIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DashboardIcon;
