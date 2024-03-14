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
      <Path d="M8.86 18.669h2.689c.738 0 1.376-.144 1.914-.433.537-.291.95-.71 1.239-1.254.291-.544.437-1.195.437-1.953 0-.755-.146-1.404-.437-1.946a2.986 2.986 0 00-1.243-1.25c-.535-.291-1.173-.437-1.914-.437H8.86v7.273zm2.621-1.499h-.863v-4.275h.838c.417 0 .767.07 1.051.21.287.137.503.362.65.674.147.31.22.727.22 1.25s-.073.942-.22 1.257a1.362 1.362 0 01-.643.678c-.281.138-.626.206-1.033.206z" />
      <Path d="M7.581 3.989h8.838V2.011h1.5v1.978h.831A2.25 2.25 0 0121 6.239v13.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.739v-13.5a2.25 2.25 0 012.25-2.25h.831V2.011h1.5v1.978zM4.5 19.739c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9.563h-15v10.176z" />
    </Svg>
  );
};
const CalendarDayIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CalendarDayIcon;
