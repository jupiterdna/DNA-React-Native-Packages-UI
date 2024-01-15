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
      <Path d="M11.285 2.724H2.723v10.404h8.562V2.724zm-7.062 8.904V4.224h5.562v7.404H4.223zM21.277 21.276H13.25V10.873h8.027v10.403zm-6.527-8.903v7.403h5.027v-7.403H14.75zM2.723 15.128h8.562v6.148H2.723v-6.148zm1.5 1.5v3.148h5.562v-3.148H4.223zM21.277 8.873H13.25V2.724h8.027v6.149zM14.75 4.224v3.149h5.027V4.224H14.75z" />
    </Svg>
  );
};
const DashboardIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DashboardIconOutline;
