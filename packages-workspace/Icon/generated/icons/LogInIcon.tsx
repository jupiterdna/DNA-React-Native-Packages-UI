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
      <Path d="M18.74 3.33a2.25 2.25 0 012.25 2.25v13.34a2.25 2.25 0 01-2.25 2.25H12v-1.5h6.74a.75.75 0 00.75-.75V5.58a.75.75 0 00-.75-.75H12v-1.5h6.74z" />
      <Path d="M11.78 13l-3.006 2.983 1.057 1.065 4.835-4.798-4.835-4.798-1.057 1.065 3.007 2.983H2.986V13h8.795z" />
    </Svg>
  );
};
const LogInIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LogInIcon;
