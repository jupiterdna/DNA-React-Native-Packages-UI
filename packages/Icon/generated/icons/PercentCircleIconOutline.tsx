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
      <Path d="M16.249 6.69l-9.56 9.559 1.061 1.06 9.56-9.559-1.061-1.06zM9.08 6.7a2.375 2.375 0 100 4.751 2.375 2.375 0 000-4.75zm-.876 2.376a.875.875 0 111.75 0 .875.875 0 01-1.75 0zM12.551 14.926a2.375 2.375 0 114.751 0 2.375 2.375 0 01-4.751 0zm2.376-.876a.875.875 0 100 1.751.875.875 0 000-1.75z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" />
    </Svg>
  );
};
const PercentCircleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PercentCircleIconOutline;
