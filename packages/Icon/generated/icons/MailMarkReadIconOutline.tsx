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
      <Path d="M4.17 4.13a2.25 2.25 0 00-2.25 2.25v11.35a2.25 2.25 0 002.25 2.25h7.098l-1.5-1.5H4.17a.75.75 0 01-.75-.75V7.69l8.507 5.315L20.42 7.7v4.729l1.5-1.5V6.38a2.25 2.25 0 00-2.25-2.25H4.17zm7.757 7.106L3.53 5.99a.75.75 0 01.64-.359h15.5a.75.75 0 01.644.366l-8.387 5.24z" />
      <Path d="M15.956 21.841l7.057-7.057-1.06-1.06-5.997 5.996-3.111-3.112-1.06 1.06 4.171 4.173z" />
    </Svg>
  );
};
const MailMarkReadIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MailMarkReadIconOutline;
