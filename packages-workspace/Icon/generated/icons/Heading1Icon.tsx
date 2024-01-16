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
      <Path d="M2.25 4.205v15.59h1.5V12.75h7.5v7.045h1.5V4.205h-1.5v7.045h-7.5V4.205h-1.5zM19.251 9.873l-2.007.549V8.867l2.252-.617h1.255v11.547h-1.5V9.873z" />
    </Svg>
  );
};
const Heading1Icon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default Heading1Icon;
