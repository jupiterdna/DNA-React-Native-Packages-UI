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
      <Path d="M13.346 6.788h-2.692l-.223 1.642c-.263.115-.51.258-.738.426L8.16 8.23l-1.346 2.33 1.31 1.015a3.937 3.937 0 000 .852l-1.31 1.014 1.347 2.332 1.533-.628c.228.168.476.31.738.426l.223 1.642h2.692l.223-1.642c.262-.116.51-.259.737-.426l1.535.628 1.346-2.332-1.312-1.015a3.96 3.96 0 000-.85l1.312-1.015-1.346-2.332-1.535.628a3.893 3.893 0 00-.737-.426l-.223-1.642zM12 9.934a2.066 2.066 0 110 4.132 2.066 2.066 0 010-4.132z" />
      <Path d="M5.375 3.125a2.25 2.25 0 00-2.25 2.25v13.25a2.25 2.25 0 002.25 2.25h13.25a2.25 2.25 0 002.25-2.25V5.375a2.25 2.25 0 00-2.25-2.25H5.375zm-.75 2.25a.75.75 0 01.75-.75h13.25a.75.75 0 01.75.75v13.25a.75.75 0 01-.75.75H5.375a.75.75 0 01-.75-.75V5.375z" />
    </Svg>
  );
};
const SettingsSquareIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SettingsSquareIconOutline;
