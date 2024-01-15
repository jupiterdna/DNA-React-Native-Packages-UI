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
      <Path d="M8.98 19.784h10.584a2.25 2.25 0 002.25-2.25v-1.942H8.98v4.192zM8.98 14.092V9.9h12.834v4.192H8.98zM7.48 14.092H2.186V9.9H7.48v4.192zM2.186 15.592H7.48v4.192H4.436a2.25 2.25 0 01-2.25-2.25v-1.942zM8.98 8.4h12.834V6.458a2.25 2.25 0 00-2.25-2.25H8.98V8.4zM7.48 4.208V8.4H2.186V6.458a2.25 2.25 0 012.25-2.25H7.48z" />
    </Svg>
  );
};
const ListViewIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ListViewIcon;
