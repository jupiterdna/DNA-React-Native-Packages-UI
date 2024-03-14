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
      <Path d="M7.75 3.224V12a4.25 4.25 0 008.5 0V3.224h1.5V12a5.75 5.75 0 11-11.5 0V3.224h1.5zM19.74 20.25v1.5H4.26v-1.5h15.48z" />
    </Svg>
  );
};
const UnderlineIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UnderlineIcon;
