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
      <Path d="M20.5 17.675v-7.442a5.052 5.052 0 001.5-.758v8.2a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.675V6.325a2.25 2.25 0 012.25-2.25h9.842a5.08 5.08 0 00-.171 1.31l.004.19H4.25a.75.75 0 00-.64.36l8.397 5.246 3.452-2.157a5.11 5.11 0 001.336.935l-4.788 2.991L3.5 7.634v10.041c0 .414.336.75.75.75h15.5a.75.75 0 00.75-.75z" />
    </Svg>
  );
};
const MailUnreadIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MailUnreadIconOutline;
