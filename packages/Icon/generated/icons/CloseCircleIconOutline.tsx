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
      <Path d="M13.061 12l3.6-3.6L15.6 7.34l-3.6 3.6-3.6-3.6L7.34 8.4l3.6 3.6-3.6 3.6 1.06 1.06 3.6-3.6 3.6 3.6 1.061-1.06-3.6-3.6z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" />
    </Svg>
  );
};
const CloseCircleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CloseCircleIconOutline;