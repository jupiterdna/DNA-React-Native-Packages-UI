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
      <Path d="M18.996 8.46a3.075 3.075 0 100-6.151 3.075 3.075 0 000 6.15z" />
      <Path d="M18.996 10.46A5.051 5.051 0 0022 9.474v8.2a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.675V6.325a2.25 2.25 0 012.25-2.25h9.842a5.08 5.08 0 001.367 4.949l-3.452 2.157-8.018-5.01-.122 1.693 8.14 5.086 4.787-2.992a5.058 5.058 0 002.202.501z" />
    </Svg>
  );
};
const MailUnreadIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MailUnreadIcon;
