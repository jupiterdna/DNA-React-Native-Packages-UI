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
      <Path d="M7.581 4.024h6.845V2.01h1.5v2.014h.801a2.25 2.25 0 012.25 2.25v5.776h-1.5V9.597H4.5v8.117c0 .415.336.75.75.75h6.58v1.5H5.25A2.25 2.25 0 013 17.714V6.274a2.25 2.25 0 012.25-2.25h.831V2.01h1.5v2.014z" />
      <Path d="M18.752 17.25v-3.323h-1.5v3.323H13.93v1.5h3.322v3.322h1.5V18.75h3.323v-1.5h-3.323z" />
    </Svg>
  );
};
const CalendarAddIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CalendarAddIcon;
