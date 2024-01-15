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
      <Path d="M1.5 6.443a4.3 4.3 0 014.3-4.3h12.4a4.3 4.3 0 010 8.6h-4.64V7.487a3.061 3.061 0 00-6.122 0v3.256H5.8a4.3 4.3 0 01-4.3-4.3zm18.288-1.028l-1.06-1.06-2.196 2.194-1.053-1.054-1.061 1.06 2.114 2.116 3.256-3.256zM8.688 21.857h9.093v-1.5H8.688v1.5z" />
      <Path d="M8.689 7.487a1.811 1.811 0 113.622 0v4.153l3.493.421a2.25 2.25 0 011.98 2.234v4.569H9.607a2.25 2.25 0 01-1.448-.528l-2.554-2.148a1.787 1.787 0 011.846-3.015l1.238.523V7.487z" />
    </Svg>
  );
};
const BookingIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookingIcon;
