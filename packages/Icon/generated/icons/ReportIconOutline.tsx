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
      <Path d="M15.518 17.25V6.75h2v10.5h-2zM6.482 11.25v6h2v-6h-2zM11 11.75V7.805h2v3.945h-2zM11 13.305v3.945h2v-3.945h-2z" />
      <Path d="M3 5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v13.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V5.25zm2.25-.75a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H5.25z" />
    </Svg>
  );
};
const ReportIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ReportIconOutline;
