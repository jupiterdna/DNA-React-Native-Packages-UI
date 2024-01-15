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
      <Path d="M11.998 2.53l11 18.94h-22l11-18.94zM3.603 19.97h16.789L11.998 5.516 3.603 19.97zm7.681-4.524v-4.91h1.5v4.91h-1.5zm-.125 1.99a.875.875 0 111.75 0 .875.875 0 01-1.75 0z" />
    </Svg>
  );
};
const WarningIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default WarningIconOutline;
