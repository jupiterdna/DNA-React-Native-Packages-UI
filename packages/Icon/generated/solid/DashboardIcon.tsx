//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const DashboardIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M11.285 2.724H2.723v10.404h8.562V2.724zM21.277 21.276H13.25V10.873h8.027v10.403zM2.723 15.128h8.562v6.148H2.723v-6.148zM21.277 8.873H13.25V2.724h8.027v6.149z" />
    </Svg>
  );
};
export default DashboardIcon;
