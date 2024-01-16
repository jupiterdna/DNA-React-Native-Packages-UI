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
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.75 2.929h1.5v2.415h-1.5V4.93zm6.28 2.601l-1.708 1.708-1.06-1.06 1.707-1.708 1.061 1.06zm-4.25 4.75l.001.068a1.654 1.654 0 11-.735-1.376l1.92-1.078.735 1.308-1.921 1.079zm-5.937.47H4.928v-1.5h2.415v1.5zm11.727 0h-2.415v-1.5h2.415v1.5zM6.47 7.53l1.061-1.06L9.24 8.178l-1.06 1.06L6.47 7.532z" />
    </Svg>
  );
};
const OdometerIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default OdometerIcon;
