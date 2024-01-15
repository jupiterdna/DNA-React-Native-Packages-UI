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
      <Path d="M2 12C2 6.477 6.478 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10C6.478 22 2 17.523 2 12zm11.06 0l3.601-3.6L15.6 7.34l-3.6 3.6-3.6-3.6L7.34 8.4l3.6 3.6-3.6 3.6 1.06 1.06 3.6-3.6 3.6 3.6 1.061-1.06-3.6-3.6z" />
    </Svg>
  );
};
const CloseCircleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CloseCircleIcon;
