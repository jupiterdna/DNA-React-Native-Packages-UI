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
      <Path d="M2 12C2 6.477 6.478 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10C6.478 22 2 17.523 2 12zm9.995-6.69c-.555 0-1.005.45-1.005 1.005v.497a4.163 4.163 0 00-3.155 4.039v3.837h-.993v1.5h10.316v-1.5h-1v-3.837a4.163 4.163 0 00-3.157-4.04v-.496c0-.555-.45-1.005-1.006-1.005zm1.56 11.835H10.44a1.557 1.557 0 103.116 0z" />
    </Svg>
  );
};
const BellCircleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BellCircleIcon;
