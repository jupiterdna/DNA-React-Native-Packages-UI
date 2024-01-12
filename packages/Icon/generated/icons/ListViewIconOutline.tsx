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
      <Path d="M4.445 4.208a2.25 2.25 0 00-2.25 2.25v11.076a2.25 2.25 0 002.25 2.25h15.128a2.25 2.25 0 002.25-2.25V6.46a2.25 2.25 0 00-2.25-2.25H4.445zm-.75 2.25a.75.75 0 01.75-.75H7.49V8.9H3.695V6.458zm0 3.942H7.49v3.192H3.695V10.4zm0 4.692H7.49v3.192H4.445a.75.75 0 01-.75-.75v-2.442zm5.295 0h11.333v2.442a.75.75 0 01-.75.75H8.99v-3.192zm11.333-1.5H8.99V10.4h11.333v3.192zM8.99 8.9V5.708h10.583a.75.75 0 01.75.75V8.9H8.99z" />
    </Svg>
  );
};
const ListViewIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ListViewIconOutline;
