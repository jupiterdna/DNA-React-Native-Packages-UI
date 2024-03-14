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
      <Path d="M7.581 3.988h8.838V2.01h1.5v1.978h.831A2.25 2.25 0 0121 6.238v6.387h-1.5V9.562h-15v10.176c0 .415.336.75.75.75h5.865v1.5H5.25A2.25 2.25 0 013 19.738v-13.5a2.25 2.25 0 012.25-2.25h.831V2.01h1.5v1.978zM21.709 14.463c-.43-.431-1.13-.431-1.56 0l-.593.593 2.321 2.321.593-.593c.431-.43.431-1.13 0-1.56l-.761-.761zM21.364 17.907l-2.325-2.325-5.541 5.54v2.326h2.325l5.541-5.54z" />
    </Svg>
  );
};
const CalendarEditIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CalendarEditIcon;
