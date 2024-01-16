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
      <Path d="M2.85 5.6A2.75 2.75 0 015.6 2.85h12.8a2.75 2.75 0 012.75 2.75v12.8a2.75 2.75 0 01-2.75 2.75H5.6a2.75 2.75 0 01-2.75-2.75V5.6zm9.15.77a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm7.648 12.097c-1.957-2.199-4.649-3.58-7.648-3.58-2.999 0-5.691 1.38-7.647 3.579A1.25 1.25 0 005.6 19.649h12.798a1.25 1.25 0 001.248-1.182z" />
    </Svg>
  );
};
const UserSquareIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserSquareIcon;
