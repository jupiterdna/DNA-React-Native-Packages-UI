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
      <Path d="M21.375 23.176l-2.085-2.085H4.27a2.25 2.25 0 01-2.25-2.25V7.522c0-1.002.655-1.851 1.56-2.142l-2.42-2.42 1.06-1.062 20.217 20.218-1.061 1.06zm-6.705-6.705a4.125 4.125 0 01-5.814-5.814L4.971 6.772H4.27a.75.75 0 00-.75.75v11.32c0 .413.335.75.75.75H17.79l-3.12-3.12zm-1.066-1.066l-3.682-3.682a2.625 2.625 0 003.682 3.682zM9.297 3.027h5.402l2.037 2.245h2.991a2.25 2.25 0 012.25 2.25v11.306l-1.5-1.5V7.523a.75.75 0 00-.75-.75h-3.655l-2.037-2.245H9.961L8.914 5.682 7.803 4.674l1.494-1.647z" />
      <Path d="M12.395 9.22a4.125 4.125 0 013.713 3.713L12.395 9.22z" />
    </Svg>
  );
};
const CameraDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CameraDisabledIconOutline;
