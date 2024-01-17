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
      <Path d="M4.25 4.075A2.25 2.25 0 002 6.325v11.35a2.25 2.25 0 002.25 2.25h15.5a2.25 2.25 0 002.25-2.25V6.325a2.25 2.25 0 00-2.25-2.25H4.25zm.494 8.225h12.75v1.5H4.744v-1.5zM9.5 10.45H4.75V7.2H9.5v3.25z" />
    </Svg>
  );
};
const CreditCardNumberIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CreditCardNumberIcon;
