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
      <Path d="M9.079 8.2a.875.875 0 100 1.751.875.875 0 000-1.75zM14.926 14.05a.875.875 0 100 1.751.875.875 0 000-1.75z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.69 16.249l9.559-9.56 1.06 1.061-9.559 9.56-1.06-1.061zm.013-7.173a2.375 2.375 0 114.751 0 2.375 2.375 0 01-4.75 0zm5.848 5.85a2.375 2.375 0 114.75 0 2.375 2.375 0 01-4.75 0z" />
    </Svg>
  );
};
const PercentCircleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PercentCircleIcon;
