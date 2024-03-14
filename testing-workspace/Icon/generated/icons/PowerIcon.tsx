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
      <Path d="M11.25 2.965v9.69h1.5v-9.69h-1.5z" />
      <Path d="M4.5 11.925c0-2.23.974-4.234 2.52-5.607l-1.066-1.06a9 9 0 1012.092 0l-1.064 1.06A7.5 7.5 0 114.5 11.925z" />
    </Svg>
  );
};
const PowerIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PowerIcon;
